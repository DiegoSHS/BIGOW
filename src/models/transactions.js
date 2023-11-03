import { pipeline } from "@/validate/server"
import { Collection, ObjectId } from "mongodb"
/**
 * Create an Array of objects with delete operations for mongo bulkWrite
 * @param {String[]} _ids Array of _ids of the documents to delete
 * @returns Array of objects with delete operations
 */
const deleteOperations = _ids => _ids.map(_id => ({ deleteOne: { filter: { _id: new ObjectId(_id) } } }))
/**
 * Find a document by an _id
 * @param {Collection} collection Mongo collection to work with
 * @param {String} _id The document _id to find
 * @returns 
 */
export const readItem = (collection, _id) => collection.find({ _id: new ObjectId(_id) }).toArray()
/**
 * Retrieve the documents in a collection
 * @param {Collection} collection Mongodb collection to work with
 * @param {Object} filter the search finter
 * @returns 
 */
export const readItems = (collection, filter = {}) => collection.find(filter).toArray()
/**
 * Insert a document in a collection
 * @param {Collection} collection Mongo collection to work with
 * @param {Object} item item to write in the collection
 * @returns 
 */
export const createItem = (collection, item) => collection.insertOne(item)
/**
 * Insert many documents in a database
 * @param {Collection} collection Mongo collection to work with
 * @param {Object[]} items items to write in the database
 * @returns 
 */
export const createItems = (collection, items) => collection.insertMany(items)
/**
 * Delete a document
 * @param {Collection} collection Mongo collection to work with
 * @param {String} _id _id of the document to delete
 * @returns 
 */
export const deleteItem = (collection, _id) => collection.deleteOne({ _id: new ObjectId(_id) })
/**
 * Delete documents by passing an array of _ids
 * @param {Collection} collection Mongo collection to work with
 * @param {String[]} _ids Array of _ids in string format
 * @returns 
 */
export const deleteItems = (collection, _ids) => collection.bulkWrite(deleteOperations(_ids))
/**
 * Updates a document
 * @param {Collection} collection Mongo collection to work with
 * @param {String} _id _id of the document to update
 * @param {Object} item new document body
 * @returns 
 */
export const updateItem = (collection, _id, item) => collection.updateOne({ _id: new ObjectId(_id) }, item)
/**
 * Handles the request of an API route
 * @param {import("next").NextApiRequest} req request object
 * @param {import("next").NextApiResponse} res response object
 * @param {Collection} collection 
 * @param {Function[]} validations 
 * @returns 
 */
export const baseHandler = async (req, res, collection, validations) => {
    const { body, method } = req
    try {
        if (!pipeline(validations[method], body)) {
            return res.status(400).json({ message: 'Invalid request body' })
        }
        switch (method) {
            case 'GET':
                const items = await readItems(collection)
                return res.status(200).json(items)
            case 'POST':
                await createItem(collection, body)
                return res.status(200).json({ message: 'Successfully created' })
            case 'DELETE':
                await deleteItems(collection, body)
                return res.status(200).json({ message: 'Successfully deleted' })
            default:
                return res.status(405).json({ error: { code: 405, message: 'Method not allowed' } })
        }
    } catch (error) {
        return res.status(500).json({ error: { message: error.message } })
    }
}
/**
 * Handles the request of a dynamic API route
 * @param {import("next").NextApiRequest} req request object
 * @param {import("next").NextApiResponse} res response object
 * @param {Collection} collection 
 * @param {Function[]} validations 
 * @returns 
 */
export const dynamicHandler = async (req, res, collection, validations) => {
    const { body, method, query: { id } } = req
    if (!pipeline(validations[method], body)) {
        return res.status(400).json({ message: 'Invalid request body' })
    }
    switch (method) {
        case 'GET':
            const item = await readItem(collection, id)
            return res.status(200).json(item)
        case 'DELETE':
            await deleteItem(collection, id)
            return res.status(200).json({ message: 'Successfully deleted' })
        case 'PUT':
            await updateItem(collection, id, body)
            return res.status(200).json({ message: 'Successfully deleted' })
        default:
            return res.status(405).json({ error: { code: 405, message: 'Method not allowed' } })
    }
}
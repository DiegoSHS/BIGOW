import { pipeline } from "@/validate/server"
import { ObjectId } from "mongodb"

const deleteOperations = _ids => _ids.map(_id => ({ deleteOne: { filter: { _id: new ObjectId(_id) } } }))

export const readItem = (collection, _id) => collection.find({ _id: new ObjectId(_id) }).toArray()

export const readItems = (collection, filter = {}) => collection.find(filter).toArray()

export const createItem = (collection, item) => collection.insertOne(item)

export const createItems = (collection, items) => collection.insertMany(items)

export const deleteItem = (collection, _id) => collection.deleteOne({ _id: new ObjectId(_id) })

export const deleteItems = (collection, _ids) => collection.bulkWrite(deleteOperations(_ids))

export const updateItem = (collection, _id, item) => collection.updateOne({ _id: new ObjectId(_id) }, item)

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
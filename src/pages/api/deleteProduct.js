import { collectionProducts } from "@/models/connector"
import { ObjectId } from "mongodb"

/**
 * Delete a product by its ID
 * 
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A JSON response indicating succes or an error.
 * 
 * @param {string} req.method - The HTTP method of the request.
 * @param {string} req.query.id - The ID  of the product to be deleted.
 * 
 * @returns {JSON} - A JSON response indicating succes or an error.
 * @throws {Error} - Throws an error if there is an internal server error.
 */

export default async function deleteProduct (req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method not allowed'})
    }

    const id = req.query.id;

    try {
        /**
         * @type {import('mongodb').DeleteWriteOpResultObject} result
         */
        const result = await collectionProducts.deleteOne({ _id: new ObjectId(id) })

        if (result.deletedCount === 1) {
            return res.status(200).json({ message: 'Successfully deleted product' });
        } else {
            return res.status(404).json({ error: 'Producto no encontrado'})
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error'})
    }
}
import { collectionProducts } from "@/models/connector"
import { ObjectId } from "mongodb"

/**
 * Delete a product by its ID
 * 
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A JSON response indicating succes or an error.
 * 
 * @returns {JSON} - A JSON response indicating succes or an error.
 * @throws {Error} - Throws an error if there is an internal server error.
 */

export default async function deleteProduct (req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method not allowed'})
    }

    /**
     * The ID  of the product to be deleted.
     * @type {string}
     */
    const id = req.query.id;

    try {
        const result = await collectionProducts.deleteOne({ _id: new ObjectId(id) })

        if (result.deletedCount === 1) {
            return res.status(200).json({ message: 'Successfully deleted product' });
        } else {
            return res.status(404).json({ error: 'Product not found'})
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error'})
    }
}
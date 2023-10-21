import { collectionProducts } from "@/models/connector";
import { ObjectId } from "mongodb";

/**
 * Delete multiple products by their IDs.
 * 
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @returns {Promise<void>} - A JSON response with a success message or an error.
 * 
 * @returns {JSON} - A JSON response indicating succes or an error.
 * @throws {Error} - Throws an error if there is an internal server error.
 */
export default async function deleteProducts(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    /**
     * Array of product IDs to be deleted.
     * @type {string[]}
     */
    const ids = req.body.ids;

    try {

        const objectsIds = ids.map((id) => new ObjectId(id))

        const result = await collectionProducts.deleteMany({ _id: { $in: objectsIds } })

        if (result.deletedCount > 0) {
            return res.status(200).json({ message: 'Products successfully removed'})
        } else {
            return res.status(404).json({ error: 'No products found with the given IDs.' });
        }
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal server error'});
    }
}
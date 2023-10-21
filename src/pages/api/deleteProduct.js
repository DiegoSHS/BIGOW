import { collectionProducts } from "@/models/connector"
import { ObjectId } from "mongodb"

export default async function deleteProduct (req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method not allowed'})
    }

    const id = req.query.id;

    try {
        const result = await collectionProducts.deleteOne({ _id:ObjectId(id) })
    } catch (error) {
        
    }
}
import { connex } from "@/models/connector"
import { baseHandler } from "@/models/transactions"

export default async function handler(req, res) {
    const collection = connex({ collec: 'shoppingQuantity' })
    const validations = {
        'GET': [],
        'POST': [],
        'PUT': [],
        'DELETE': []
    }
    return baseHandler(req, res, collection, validations)
}
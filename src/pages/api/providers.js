import { connex } from "@/models/connector"
import { baseHandler } from "@/models/transactions"

export default async function handler(req, res) {
    const collection = connex({ collec: 'providers' })
    const validations = {
        'GET': [],
        'POST': [],
        'DELETE': []
    }
    return baseHandler(req, res, collection, validations)
}
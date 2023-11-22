import { connex } from "@/models/connector"
import { baseHandler } from "@/models/transactions"
import { validateClient, validateClientTypes } from "@/validate/server"

export default async function handler(req, res) {
    const collection = connex({ collec: 'clients' })
    const validations = {
        'GET': [],
        'POST': [validateClient, validateClientTypes],
        'DELETE': []
    }
    return baseHandler(req, res, collection, validations)
}
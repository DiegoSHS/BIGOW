import { connex } from "@/models/connector"
import { baseHandler } from "@/models/transactions"
import { validateProduct, validateProductTypes } from "@/validate/server"

export default async function handler(req, res) {
    const collection = connex({})
    const validations = {
        'GET': [],
        'POST': [validateProduct, validateProductTypes],
        'DELETE': []
    }
    return baseHandler(req, res, collection, validations)
}
import { connex } from "@/models/connector";
import { dynamicHandler } from "@/models/transactions";

export default async function handler(req, res) {
    const collection = connex({ collec: 'clients' })
    const validations = {
        'GET': [],
        'POST': [],
        'PUT': [],
        'DELETE': []
    }
    return dynamicHandler(req, res, collection, validations)
}
import { connex } from "@/models/connector";
import { dynamicHandler } from "@/models/transactions";

const clientValidation = {
    'POST': (body) => {
        if (
            body &&
            typeof body.name === 'string' && body.name.length >= 1 && body.name.trim() &&
            typeof body.direction === 'string' && body.direction.length >= 1 && body.direction.trim() &&
            typeof body.email === 'string' && body.email.length >= 1 &&
            typeof body.rfc === 'string' && body.rfc.length >= 1 &&
            typeof body.phoneNumber === 'number' && body.phoneNumber >= 1
        ) {
            return body
        } else {
            return null
        }
    }
}


export default async function handler(req, res) {
    const collection = connex({ collec: 'clients' })
    const validations = {
        'GET': [],
        'POST': [clientValidation],
        'PUT': [],
        'DELETE': []
    }
    return dynamicHandler(req, res, collection, validations)
}
import { connex } from "@/models/connector";

// Function to validate a new product
const validateProduct = (newProduct) => {
    return (
        // Verify that newProduct exists and that it meets the following conditions
        newProduct &&
        typeof newProduct.active === 'boolean' &&
        typeof newProduct.key === 'string' && newProduct.key.length >= 1 &&
        typeof newProduct.mark === 'string' && newProduct.mark.length >= 1 &&
        typeof newProduct.existenceWarehouse === 'number' && newProduct.existenceWarehouse >= 0 &&
        typeof newProduct.existenceStore === 'number' && newProduct.existenceStore >= 0 &&
        typeof newProduct.price === 'number' && newProduct.price >= 0 &&
        typeof newProduct.publicPrice === 'number' && newProduct.publicPrice >= 0 &&
        typeof newProduct.whorkshopPrice === 'number' && newProduct.whorkshopPrice >= 0 &&
        typeof newProduct.stock === 'number' && newProduct.stock >= 0 &&
        newProduct.providerId
    );
}

// Function to handle product registration
const handleRegistration = async (newProduct) => {
    try {
        const collection = connex('bigo', 'products');

        if (validateProduct(newProduct)) {
            await collection.insertOne(newProduct);
            return { status: 201, message: 'The product has been registered correctly' };
        }
        return { status: 400, message: 'Incomplete or incorrect data' };

    } catch (error) {
        console.log('Error when registering the products: ', error);
        return { status: 500, message: 'The product could not be registered' };
    }
}


// POST request handler
export default async function handlerPost(req, res) {
    if (req.method === "POST") {
        try {
            const newProduct = req.body;

            const result = await handleRegistration(newProduct);

            res.status(result.status).json({ message: result.message });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

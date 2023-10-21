import { collectionProducts } from "@/models/connector";

/**
 *  Validates a products object.
 * 
 * @param {Object} newProduct - The product object to validate.
 * @returns {boolean} - Returns true if the product is valid otherwise false.
 */
const validateProduct = (newProduct) => {
    return (
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

/**
 * Handles product registration.
 * 
 * @param {Object} newProduct - The product object to register.
 * @returns {object} - Returns an object with status and message properties.
 */
const handleRegistration = async (newProduct) => {
    try {
        if (validateProduct(newProduct)) {
            await collectionProducts.insertOne(newProduct);
            return { status: 201, message: 'The product has been registered correctly' };
        }
        return { status: 400, message: 'Incomplete or incorrect data' };

    } catch (error) {
        console.log('Error when registering the products: ', error);
        return { status: 500, message: 'The product could not be registered' };
    }
}


/**
 *  Handles the HTTP POST request for product registration.
 * 
 * @param {Object} req - The request object. 
 * @param {Object} res - The response obejct.
 * @param {Promise<void>} - Sends an HTTP response with a message.
 */
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

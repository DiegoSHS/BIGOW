/**
 * Validates a products object
 * @param {Object} newProduct The product object to validate.
 * @returns {boolean} Returns true if the product is valid otherwise .
 */
export const validateProduct = (newProduct) => {
    const valid = newProduct &&
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
    if (valid) {
        return newProduct
    }
    return valid
}

export const pipeline = (methods, input) => methods.length !== 0 ? methods.reduce((y, f) => f(y), input) : true
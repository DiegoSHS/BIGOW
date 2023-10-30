/**
 * Validates a products object
 * @param {Object} newProduct The product object to validate.
 * @returns {boolean} Returns true if the product is valid otherwise .
 */
export const validateProduct = (newProduct) => {
    const valid = newProduct &&
        newProduct.key.length >= 1 &&
        newProduct.mark.length >= 1 &&
        newProduct.existenceWarehouse >= 0 &&
        newProduct.existenceStore >= 0 &&
        newProduct.price >= 0 &&
        newProduct.publicPrice >= 0 &&
        newProduct.whorkshopPrice >= 0 &&
        newProduct.stock >= 0 &&
        newProduct.providerId
    if (valid) {
        return newProduct
    }
    return valid
}

export const validateProductTypes = (newProduct) => {
    const valid = newProduct &&
        typeof newProduct.active === 'boolean' &&
        typeof newProduct.key === 'string' &&
        typeof newProduct.mark === 'string' &&
        typeof newProduct.existenceWarehouse === 'number' &&
        typeof newProduct.existenceStore === 'number' &&
        typeof newProduct.price === 'number' &&
        typeof newProduct.publicPrice === 'number' &&
        typeof newProduct.whorkshopPrice === 'number' &&
        typeof newProduct.stock === 'number'
    if (valid) {
        return newProduct
    }
    return valid
}

export const validateClient = (client) => {
    if (
        client &&
        client.name.length >= 1 && client.name.trim() &&
        client.direction.length >= 1 && client.direction.trim() &&
        client.email.length >= 1 &&
        client.rfc.length >= 1 &&
        client.phoneNumber >= 1
    ) {
        return client
    } else {
        return false
    }
}

export const validateClientTypes = (client) => {
    if (
        client &&
        typeof client.name === 'string' &&
        typeof client.direction === 'string' &&
        typeof client.email === 'string' &&
        typeof client.rfc === 'string' &&
        typeof client.phoneNumber === 'number'
    ) {
        return client
    } else {
        return false
    }
}

export const pipeline = (methods, input) => methods.length !== 0 ? methods.reduce((y, f) => f(y), input) : true
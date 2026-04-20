// error handling

function required(message) {
    const error = new Error(message)
    error.status = 400
    return error
}

function notFound(value) {
    const error = new Error(value + " not found")
    error.status = 404
    return error
}

function alreadyExists(value) {
    const error = new Error(value + " already exists")
    error.status = 409
    return error
}


module.exports = { alreadyExists, required, notFound }
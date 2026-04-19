
const db = require("./models")

// get ALl books
const getAll = async () => {
    return db.Book.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] } })
}

// get book by pk (id)
const getById = async (id) => {
    return db.Book.findByPk(id, { attributes: { exclude: ["createdAt", "updatedAt"] } })
}

// create new book 
const createRow = async (body) => {
    body.title = body.title.toLowerCase().trim()
    const book = await db.Book.create(body)
    return createdUpdated(book)
}

// duplicate title check
const findByTitle = async (title) => {
    return db.Book.findOne({
        where: { title }
    })
}

// put (update) book
const replaceRow = async (id, body) => {
    const book = await db.Book.findByPk(id)

    if (!book) {
        return null
    }
    const newTitle = body.title ? body.title.toLowerCase().trim() : book.title
    const newPrice = body.price ?? book.price
    const newStock = body.stock ?? book.stock
    // checks the same data is given in body 
    const checkSameData = book.title === newTitle && Number(book.price) === Number(newPrice) && Number(book.stock) === Number(newStock)
    if (checkSameData) return { Nochange: true }

    book.title = newTitle
    book.price = newPrice
    book.stock = newStock

    const putUpdate = await book.save()   // save changes.
    return createdUpdated(putUpdate)
}

// patch (partial update) book
const modifyRow = async (id, body) => {
    const book = await db.Book.findByPk(id)

    if (!book) {
        return null
    }
    const newTitle = body.title ? body.title.toLowerCase().trim() : book.title
    const newPrice = body.price ?? book.price
    const newStock = body.stock ?? book.stock

    const checkSameData = book.title === newTitle && Number(book.price) === Number(newPrice) && Number(book.stock) === Number(newStock)
    if (checkSameData) return { Nochange: true }

    if (body.title) {
        body.title = newTitle
    }
    const patchUpdate = await book.update(body)  // update and save changes
    return createdUpdated(patchUpdate)
}

// delete book
const deleteRow = async (id) => {
    const book = await db.Book.findByPk(id)

    if (!book) {
        return null
    }
    await book.destroy()
    return true          // for deletion success.
}

// remove createdAt, updatedAt in response  at the post,put,patch methods
function createdUpdated(data) {
    if (!data) return data

    const values = data.toJSON()
    delete values.createdAt
    delete values.updatedAt
    return values
}


module.exports = { getAll, getById, findByTitle, createRow, replaceRow, modifyRow, deleteRow }

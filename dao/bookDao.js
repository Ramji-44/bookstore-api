
const db = require("./models")

// get ALl books
const getAll = async () => {
    return db.Book.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        order: [["title", "ASC"]]
    })
}

// get book by pk (id)
const getById = async (id) => {
    return db.Book.findByPk(id, { attributes: { exclude: ["createdAt", "updatedAt"] } })
}

// duplicate title check
const findByTitle = async (title) => {
    return db.Book.findOne({
        where: { title }
    })
}

// create new book 
const createRow = async (body) => {
    const book = await db.Book.create(body)
    return createdUpdated(book)
}

// put (update) book
const replaceRow = async (id, body) => {
    const book = await db.Book.findByPk(id)

    if (!book) {
        return null
    }
    book.title = body.title
    book.price = body.price
    book.stock = body.stock

    const putUpdate = await book.save()   // save changes.
    return createdUpdated(putUpdate)
}

// patch (partial update) book
const modifyRow = async (id, body) => {
    const book = await db.Book.findByPk(id)

    if (!book) {
        return null
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
    return await book.destroy()
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

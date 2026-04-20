const bookDao = require("../../dao/bookDao")
const { required, notFound, alreadyExists } = require("./errorHelper")

// get all books 
const listAll = async () => {
    return bookDao.getAll()
}

// get book by id 
const findById = async (id) => {
    const book = await bookDao.getById(id)
    if (!book) {
        throw notFound("Book")
    }
    return book
}

// create new book
const create = async (body) => {
    const exists = await bookDao.findByTitle(body.title)    // if exist in db
    if (exists) {
        throw alreadyExists("Book")
    }
    return bookDao.createRow(body)
}

// put update book
const replace = async (id, body) => {
    const book = await bookDao.getById(id)
    if (!book) {
        throw notFound("Book")
    }
    const exists = await bookDao.findByTitle(body.title)

    if (exists && exists.id !== Number(id)) {
        throw alreadyExists("Book")
    }
    return bookDao.replaceRow(id, body)
}

// patch update (partial) book
const modify = async (id, body) => {
    const book = await bookDao.getById(id)
    if (!book) {    // if title is update
        throw notFound("Book")
    }
    if (body.title) {
        const exists = await bookDao.findByTitle(body.title)
        if (exists && exists.id !== Number(id)) {
            throw alreadyExists("Book")
        }
    }
    return bookDao.modifyRow(id, body)
}

// delete book 
const remove = async (id) => {
    const book = await bookDao.getById(id)
    if (!book) {
        throw notFound("Book")
    }
    return bookDao.deleteRow(id)
}

module.exports = { listAll, findById, create, replace, modify, remove }

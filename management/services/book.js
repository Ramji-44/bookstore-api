
const bookDao = require("../../dao/book.dao")

// get all books 
const AllBooks = async() => {
    return bookDao.getAllBooks()
}

// get book by id 
const getByBookId = async(id) => {
    return bookDao.getBookbyId(id)
}

// create new book
const createBook = async(body) => {
    return bookDao.createBook(body)
}

// duplicate entries check
const findDuplicateBook = async(title, price, author_id) => {
    return await db.Book.findOne( {where : title, price, author_id })
}

// put update book
const fullUpdateBook = async(id, body) => {
    return bookDao.updateBook(id, body)
}

// patch update (partial) book
const partialUpdateBook = async(id, body) => {
    return bookDao.patchBook(id, body)
}

// delete book 
const destroyBook = async(id) => {
    return bookDao.deleteBook(id)
}

module.exports = {AllBooks, getByBookId, createBook, fullUpdateBook, partialUpdateBook, destroyBook }


const bookDao = require("../../dao/book.dao")

// get all books 
const AllBooks = async() => {
    return bookDao.getAllBooks()
}

// get book by id 
const getByBookId = async(id) => {
    return bookDao.getBooksbyId(id)
}

// create new book
const createBook = async(body) => {
    return bookDao.postBook(body)
}

// put update book
const fullUpdateBook = async(id, body) => {
    return bookDao.putBook(id, body)
}

// patch update (partial) book
const partialUpdateBook = async(id, body) => {
    return bookDao.patchBook(id, body)
}

// delete book 
const destroyBook = async(id) => {
    return bookDao.removeBook(id)
}

module.exports = {AllBooks, getByBookId, createBook, fullUpdateBook, partialUpdateBook, destroyBook }


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
    if(!body.title){
        throw new Error ("Title is required")
    }
     const bookExists = await bookDao.findByTitle(body.title.toLowerCase().trim())    // if exist in db
        if(bookExists){
            throw new Error ("Book already exists")
        }
    return bookDao.createBook(body)
}


// put update book
const fullUpdateBook = async(id, body) => {
    if(body.title){
    const bookExists = await bookDao.findByTitle(body.title.toLowerCase().trim());
    
        if (bookExists && bookExists.id != id) {
            throw new Error("Book already exists");
        }
    }
    return bookDao.updateBook(id, body)
}

// patch update (partial) book
const partialUpdateBook = async(id, body) => {

    if (body.title) {    // if title is update
    
            const bookExists = await bookDao.findByTitle(body.title.toLowerCase().trim());
    
            if (bookExists && bookExists.id != id) {
                throw new Error("Book already exists");
            }
        }
    return bookDao.patchBook(id, body)
}

// delete book 
const destroyBook = async(id) => {
    return bookDao.deleteBook(id)
}

module.exports = {AllBooks, getByBookId, createBook, fullUpdateBook, partialUpdateBook, destroyBook }

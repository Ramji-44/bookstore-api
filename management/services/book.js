
const bookDao = require("../../dao/bookDao")

// get all books 
const listAll = async() => {
    return bookDao.getAll()
}

// get book by id 
const findById = async(id) => {
    return bookDao.getById(id)
}

// create new book
const create = async(body) => {
    if(!body.title){
        throw new Error ("Title is required")
    }
     const bookExists = await bookDao.findByTitle(body.title.toLowerCase().trim())    // if exist in db
        if(bookExists){
            throw new Error ("Book already exists")
        }
    return bookDao.createRow(body)
}


// put update book
const replace = async(id, body) => {
    if(body.title){
    const bookExists = await bookDao.findByTitle(body.title.toLowerCase().trim());
    
        if (bookExists && bookExists.id != id) {
            throw new Error("Book already exists");
        }
    }
    return bookDao.replaceRow(id, body)
}

// patch update (partial) book
const modify = async(id, body) => {

    if (body.title) {    // if title is update
    
            const bookExists = await bookDao.findByTitle(body.title.toLowerCase().trim());
    
            if (bookExists && bookExists.id != id) {
                throw new Error("Book already exists");
            }
        }
    return bookDao.modifyRow(id, body)
}

// delete book 
const remove = async(id) => {
    return bookDao.deleteRow(id)
}

module.exports = {listAll, findById, create, replace, modify, remove }

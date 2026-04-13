
const db = require("./models")

// get ALl books
const getAllBooks = async() => {
    return db.Book.findAll()
}

// get book by pk (id)
const getBookbyId = async(id) => {
    return db.Book.findByPk(id)
}

// create new book 
const createBook = async(body) => {
    return db.Book.create(body)
}

// put (update) book
const updateBook = async(id, body) => {
    const book = await db.Book.findByPk(id)

    if(!book){
        return null
    }
    book.title = body.title
    book.price = body.price
    book.author_id = body.author_id

    return await book.save()   // save changes.
}

// patch (partial update) book
const patchBook = async(id, body) => {
    const book = await db.Book.findByPk(id)

    if(!book){
        return null
    }
    return await book.update(body)  // update and save changes
}

// delete book
const deleteBook = async(id) => {
    const book = await db.Book.findByPk(id)

    if(!book){
        return null
    }
    await book.destroy()
    return true          // for deletion success.
}

module.exports = {getAllBooks, getBookbyId, createBook, updateBook, patchBook, deleteBook}

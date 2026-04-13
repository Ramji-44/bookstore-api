
const db = require("./models")

// get ALl books
const getAllBooks = async() => {
    return db.Book.findAll()
}

// get book by pk (id)
const getBooksbyId = async(id) => {
    return db.Book.findByPk(id)
}

// create new book 
const postBook = async(body) => {
    return db.Book.create(body)
}

// put (update) book
const putBook = async(id, body) => {
    const book = db.Book.findByPk(id)

    if(!book){
        return null
    }
    book.name = body.name
    book.price = body.price
    book.author_id = body.author_id

    return await author.save()   // save changes.
}

// patch (partial update) book
const patchBook = async(id, body) => {
    const book = db.Book.findByPk(id)

    if(!book){
        return null
    }
    return await book.update()  // update and save changes
}

// delete book
const removeBook = async(id, body) => {
    const book = db.Book.findByPk(id)

    if(!book){
        return null
    }
    await book.destroy()
    return true          // for deletion success.
}

module.exports = {getAllBooks, getBooksbyId, postBook, putBook, patchBook, removeBook}

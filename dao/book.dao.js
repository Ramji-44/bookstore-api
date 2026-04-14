
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
    body.title = body.title.toLowerCase().trim()
    return db.Book.create(body)
}

// duplicate title check
const findByTitle = async (title) => {
    return db.Book.findOne({
        where: { title }
    })
}

// put (update) book
const updateBook = async(id, body) => {
    const book = await db.Book.findByPk(id)

    if(!book){
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

    return await book.save()   // save changes.
}

// patch (partial update) book
const patchBook = async(id, body) => {
    const book = await db.Book.findByPk(id)

    if(!book){
        return null
    }
    const newTitle = body.title ? body.title.toLowerCase().trim() : book.title
    const newPrice = body.price ?? book.price
    const newStock = body.stock ?? book.stock

    const checkSameData = book.title === newTitle && Number(book.price) === Number(newPrice) && Number(book.stock) === Number(newStock)
    if (checkSameData) return { Nochange: true }

      if (body.title) body.title = newTitle 
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

module.exports = {getAllBooks, getBookbyId,findByTitle, createBook, updateBook, patchBook, deleteBook}

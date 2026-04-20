// books controller
const bookService = require("../management/services/book")
const { matchedData } = require("express-validator")

// get All books  - /books 
const getBooks = async (req, res) => {
    try {
        const data = await bookService.listAll()   // calls books service
        res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

// get   /books/:id  -  books byID 
const getById = async (req, res) => {
    try {
        const data = await bookService.findById(req.params.id)   // get id from params.
        res.status(200).json(data)
    }
    catch (err) {
        return res.status(err.status || 500).json({ error: err.message })
    }
}

// post - /books/:id   -create books
const createBook = async (req, res) => {
    try {
        const data = await bookService.create(matchedData(req))  // allows only matched data as a request.
        res.status(201).json(data)
    }
    catch (err) {
        return res.status(err.status || 500).json({ error: err.message })
    }
}

// Put   /books/:id - update 
const updateBook = async (req, res) => {
    try {
        const fullUpdate = await bookService.replace(req.params.id, matchedData(req))   //matchedData(req) is body.
        res.status(200).json(fullUpdate)
    }
    catch (err) {
        return res.status(err.status || 500).json({ error: err.message })
    }
}

// patch  /books/:id  - partial update
const patchBook = async (req, res) => {
    try {
        const partialUpdate = await bookService.modify(req.params.id, matchedData(req))
        res.status(200).json(partialUpdate)
    }
    catch (err) {
        return res.status(err.status || 500).json({ error: err.message })
    }
}

// delete  /books/:id  - destroy
const deleteBook = async (req, res) => {
    try {
        await bookService.remove(req.params.id)
        res.status(200).json({ Message: "Book Deleted successfully" })
    }
    catch (err) {
        return res.status(err.status || 500).json({ error: err.message })
    }
}


module.exports = { getBooks, getById, createBook, updateBook, patchBook, deleteBook } 
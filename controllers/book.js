// books controller
const bookService = require("../management/services/book")
const { matchedData } = require("express-validator")

// get All books  - /api/books 
const getBooks = async (req, res) => {
    try {
        const data = await bookService.listAll()   // calls books service
        res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json({ Error: err.message })
    }
}

// get   /api/books/:id  -  books byID 
const getById = async (req, res) => {
    try {
        const data = await bookService.findById(req.params.id)   // get id from params.
        res.status(200).json(data)
    }
    catch (err) {
        return res.status(err.status || 500).json({ Error: err.message })
    }
}

// post - /api/books/:id   -create books
const createBook = async (req, res) => {
    try {
        const data = await bookService.create(matchedData(req))  // allows only matched data as a request.
        res.status(201).json(data)
    }
    catch (err) {
        return res.status(err.status || 500).json({ Error: err.message })
    }
}

// Put   /api/books/:id - update 
const updateBook = async (req, res) => {
    try {
        const fullUpdate = await bookService.replace(req.params.id, matchedData(req))   //matchedData(req) is body.
        res.json(fullUpdate)
    }
    catch (err) {
        return res.status(err.status || 500).json({ Error: err.message })
    }
}

// patch  /api/books/:id  - partial update
const patchBook = async (req, res) => {
    try {
        const partialUpdate = await bookService.modify(req.params.id, matchedData(req))
        res.json(partialUpdate)
    }
    catch (err) {
        return res.status(err.status || 500).json({ Error: err.message })
    }
}

// delete  /api/books/:id  - destroy
const deleteBook = async (req, res) => {
    try {
        await bookService.remove(req.params.id)
        res.json({ Message: "Book Deleted successfully" })
    }
    catch (err) {
        return res.status(err.status || 500).json({ Error: err.message })
    }
}


module.exports = { getBooks, getById, createBook, updateBook, patchBook, deleteBook } 
// books controller
const bookService = require("../management/services/book")

// get All books  - /api/books 
const getBooks = async(req,res) => {
    try{
        const data = await bookService.listAll()   // calls books service
        res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({Error: err.message})
    }
}

// get   /api/books/:id  -  books byID 
const getById = async (req,res) => {
    try{
        const data = await bookService.findById(req.params.id)   // get id from params.
        if(!data) {
            return res.status(404).json({Error : "Book Not Found"})
        }
        res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({Error : err.message})
    }
}

// post - /api/books/:id   -create books
const createBook = async(req,res) => {
    try{
        const data = await bookService.create(req.body)
        res.status(201).json(data)
    }
    catch(err){
        if(err.message === "Book already exists"){
            return res.status(409).json({Error : err.message})
        }
        return res.status(500).json({Error : err.message})
    }
}


// Put   /api/books/:id - update 
const updateBook = async(req,res) => {
    try{
        const id = req.params.id
        const body = req.body
        const fullUpdate = await bookService.replace(id,body)

        if(!fullUpdate){
            return res.status(404).json({Error : "Book Not Found"})
        }
        if (fullUpdate.Nochange) {     // response for the same data in body,
            return res.status(200).json({ message: "No update happened, all values are same" })
        }
        res.json(fullUpdate)
    }
    catch(err){
        if(err.message === "Book already exists"){
            return res.status(409).json({error : err.message})
        }
        return res.status(500).json({Error : err.message})
    }
}

// patch  /api/books/:id  - partial update
const patchBook = async(req,res) => {
    try{
        const id = req.params.id
        const body = req.body
        const partialUpdate = await bookService.modify(id, body)

        if(!partialUpdate){
            return res.status(404).json({Error : "Book not found"})
        }
                
        if (partialUpdate.Nochange) {    //  response for the same data in body,
            return res.status(200).json({ message: "No update happened, all values are same" })
        }
        res.json(partialUpdate)
    }
    catch(err){
        if(err.message === "Book already exists"){
            return res.status(409).json({Error : err.message})
        }
        return res.status(500).json({Error : err.message})
    }
}

// delete  /api/books/:id  - destroy

const deleteBook = async(req,res) => {
    try{
        const id = req.params.id
        const remove = await bookService.remove(id)

        if(!remove){
            return res.status(404).json({Error : "Book not found"})
        }
        res.json({Message : "Book Deleted successfully"})
    }
    catch(err){
        return res.status(500).json({Error : err.message})
    }
}


module.exports = { getBooks, getById, createBook, updateBook, patchBook, deleteBook } 
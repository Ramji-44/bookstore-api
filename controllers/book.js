// books controller
const bookService = require("../management/services/book")

// get All books  - /api/books 
const getAllBooks = async(req,res) => {
    try{
        const data = await bookService.AllBooks()   // calls books service
        res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({Error: err.message})
    }
}

// get   /api/books/:id  -  books byID 
const getByid = async (req,res) => {
    try{
        const data = await bookService.getByBookId(req.params.id)   // get id from params.
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
const postBook = async(req,res) => {
    try{
        const data = await bookService.createBook(req.body)
        res.status(201).json(data)
    }
    catch(err){
        return res.status(500).json({Error : err.message})
    }
}


// Put   /api/books/:id - update 
const putBook = async(req,res) => {
    try{
        const id = req.params.id
        const body = req.body
        const fullUpdate = await bookService.fullUpdateBook(id,body)

        if(!fullUpdate){
            return res.status(404).json({Error : "Book Not Found"})
        }
        res.json({Message : "Book Updated successfully !!"})
    }
    catch(err){
        return res.status(500).json({Error : err.message})
    }
}

// patch  /api/books/:id  - partial update
const patchBook = async(req,res) => {
    try{
        const id = req.params.id
        const body = req.body
        const partialUpdate = await bookService.partialUpdateBook(id, body)

        if(!partialUpdate){
            return res.status(404).json({Error : err.message})
        }
        res.json({Message : "Book Updated succesfully"})
    }
    catch(err){
        return res.status(500).json({Error : err.message})
    }
}

// delete  /api/books/:id  - destroy

const deleteBook = async(req,res) => {
    try{
        const id = req.params.id
        const remove = await bookService.destroyBook(id)

        if(!remove){
            return res.status(404).json({Error : err.message})
        }
        res.json({Message : "Book Deleted successfully"})
    }
    catch(err){
        return res.status(500).json({Error : err.message})
    }
}


module.exports = { getAllBooks, postBook, getByid, putBook, patchBook, deleteBook } 
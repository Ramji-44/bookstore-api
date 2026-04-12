
const AuthorService = require("../management/services/author.service")

// get  /authors
const getAllauthors = async(req,res) => {
    try{
        const data  = await AuthorService.AllAuthors()  // calls author.service
        res.status(200).json(data) 
    }
    catch(err){
        return res.status(500).json({Error : err.message})
    }
}

// getby id /authors
const getById = async (req,res) => {
    try{
        const data = await AuthorService.getAuthorById(req.params.id)    // calls author.service

        if(!data){    // if not found
            return res.status(404).json({Error : "Author not Found"})
        }
        res.status(200).json(data)
    }
    catch(err) {
        return res.status(500).json({Error: err.message})
    }
}

// post  /authors
const createNewAuthor = async (req,res) => {
    try{
        const data = await AuthorService.createAuthor(req.body)   // calls author.service
        res.status(201).json(data)
    }
    catch(err){
        return res.status(500).json({Message : "Author created Successfully "})
    }
}


// put   /authors/:id 
const updateAuthor = async(req,res) => {
    try{
        const id = req.params.id
        const body = req.body

        const updated = await AuthorService.updateAuthorById(id,body)

        if(!updated){    // if not found
            return res.status(404).json({Error : "Author not Found"})
        }
        res.json({Message : "Author updated successfully"})
    }
    catch(err){
        return res.status(500).json({Error : err.message})
    }
}


// patch  /authors/:id   -> partial update
const patchAuthor = async (req,res) => {
    try {
        const id = req.params.id
        const body = req.body

        const updated = await AuthorService.patchAuthorById(id,body)

        if (!updated) {   // if not found
            return res.status(404).json({ message: "Author not found" })
        }
        res.json({ message: "Author  updated successfully"})
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}


// delete  /authors/:id  
const deleteAuthor = async (req,res) => {
    try{
        const id = req.params.id

        const deleted = await AuthorService.deleteAuthorById(id)

        if(!deleted){
            return res.status(404).json({message : "Author not Found"})
        }
        res.json({message : "Author deleted successfully"})
    }
    catch(err){
        res.status(500).json({Error : err.message})
    }
}


// export
module.exports = {getAllauthors, getById, createNewAuthor, updateAuthor, patchAuthor, deleteAuthor}

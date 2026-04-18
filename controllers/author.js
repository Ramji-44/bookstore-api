
const AuthorService = require("../management/services/author")

// get  /authors
const getAuthors = async(req,res) => {
    try{
        const data  = await AuthorService.listAll()  // calls author.service
        res.status(200).json(data) 
    }
    catch(err){
        return res.status(500).json({Error : err.message})
    }
}


// getby id /authors
const getById = async (req,res) => {
    try{
        const data = await AuthorService.findById(req.params.id)    // calls author.service

        if(!data){    // if not found
            return res.status(404).json({Error : "Author not Found"})
        }
        res.status(200).json(data)
    }
    catch(err) {
        return res.status(500).json({Error : err.message})
    }
}


// post  /authors
const createAuthor = async (req,res) => {
    try{
        const data = await AuthorService.create(req.body)   // calls author.service
        res.status(201).json({Message : "Author Created Successfully"})
    }
    catch(err){

        if(err.message === "Author already exists"){
            return res.status(409).json({Error : err.message})
        }
        return res.status(500).json({ Error: err.message })
    }
}


// put   /authors/:id 
const updateAuthor = async(req,res) => {
    try{
        const id = req.params.id
        const body = req.body

        const updated = await AuthorService.replace(id,body)

        if(!updated){    // if not found
            return res.status(404).json({Error : "Author not Found"})
        }
          // response for the same data in body,
        if (updated.Nochange) {
            return res.status(200).json({ message: "No update happened, all values are same" })
        }
        res.json({Message : "Author updated successfully"})  // if data changes, updated sucess
    }

    catch(err){
         if(err.message === "Author already exists"){
            return res.status(409).json({Error : err.message})
        }
        return res.status(500).json({Error : err.message})
    }
}


// patch  /authors/:id   -> partial update
const patchAuthor = async (req,res) => {
    try {
        const id = req.params.id
        const body = req.body

        const updated = await AuthorService.modify(id,body)

        if (!updated) {   // if not found
            return res.status(404).json({ message: "Author not found" })
        }
          // update happened or not happened
        if (updated.Nochange) {
            return res.status(200).json({ message: "No update happened, all values are same" })
        }

        res.json({ message: "Author  updated successfully"})
    }
    catch (err) {
         if(err.message === "Author already exists"){
            return res.status(409).json({Error : err.message})
        }
        res.status(500).json({ Error: err.message })
    }
}


// delete  /authors/:id  
const deleteAuthor = async (req,res) => {
    try{
        const id = req.params.id

        const deleted = await AuthorService.remove(id)

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
module.exports = {getAuthors, getById, createAuthor, updateAuthor, patchAuthor, deleteAuthor}

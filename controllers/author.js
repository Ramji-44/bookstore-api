const authorService = require("../management/services/author")
const { matchedData } = require("express-validator")

// get  /authors
const getAuthors = async (req, res) => {
    try {
        const data = await authorService.listAll()  // calls author.service
        res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json({ Error: err.message })
    }
}

// getby id /authors
const getById = async (req, res) => {
    try {
        const data = await authorService.findById(req.params.id)    // calls author.service
        res.status(200).json(data)
    }
    catch (err) {
        res.status(err.status || 500).json({ Error: err.message })
    }
}

// post  /authors
const createAuthor = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await authorService.create(body)   // calls author.service
        res.status(201).json(data)
    }
    catch (err) {
        res.status(err.status || 500).json({ Error: err.message })
    }
}

// put   /authors/:id 
const updateAuthor = async (req, res) => {
    try {
        const updated = await authorService.replace(req.params.id, matchedData(req))   // matchedData(req) is body.
        res.json(updated)  // if data changes, updated sucess
    }
    catch (err) {
        res.status(err.status || 500).json({ Error: err.message })
    }
}

// patch  /authors/:id   -> partial update
const patchAuthor = async (req, res) => {
    try {
        const updated = await authorService.modify(req.params.id, matchedData(req))
        res.json(updated)
    }
    catch (err) {
        res.status(err.status || 500).json({ Error: err.message })
    }
}

// delete  /authors/:id  
const deleteAuthor = async (req, res) => {
    try {
        await authorService.remove(req.params.id)
        res.json({ message: "Author deleted successfully" })
    }
    catch (err) {
        res.status(err.status || 500).json({ Error: err.message })
    }
}


// export
module.exports = { getAuthors, getById, createAuthor, updateAuthor, patchAuthor, deleteAuthor }

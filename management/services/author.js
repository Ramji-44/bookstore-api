const AuthorDao = require("../../dao/authorDao")

// get all authors 
const listAll = async () => {
    return AuthorDao.getAll()    // calls the dao
}

// get author by id 
const findById = async (id) => {
    return AuthorDao.getById(id)
}

// create new author
const create = async (body) => {
    if (!body.name || !body.country) {
        throw new Error("Name and country are required")
    }

    const authorExists = await AuthorDao.findByNameCountry(body.name, body.country)    // if exist in db
    if (authorExists) {
        throw new Error("Author already exists")
    }
    return AuthorDao.createRow(body)
}

// put  full update author 
const replace = async (id, body) => {
        const authorExists = await AuthorDao.findAuthor(body.name, body.country, id)

        // ignore same 
        if (authorExists) {
            throw new Error("Author already exists");
        }
    return AuthorDao.replaceRow(id, body)
}

// patch update author
const modify = async (id, body) => {
     const author = await AuthorDao.getById(id)
    if (!author) {
        throw new Error("Author not found")
    }

    const newName = body.name ?? author.name
    const newCountry = body.country ?? author.country

    const authorExists = await AuthorDao.findAuthor(newName, newCountry, id)

    if (authorExists) {
        throw new Error("Author already exists")
    }
    return AuthorDao.modifyRow(id, body)
}

// delete author
const remove = async (id) => {
    return AuthorDao.deleteRow(id)
}

// exports
module.exports = { listAll, findById, create, replace, modify, remove }

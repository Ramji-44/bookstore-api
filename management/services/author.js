const authorDao = require("../../dao/authorDao")
const { required, notFound, alreadyExists } = require("./errorHelper")

// get all authors 
const listAll = async () => {
    return authorDao.getAll()    // calls the dao
}

// get author by id 
const findById = async (id) => {
    const author = await authorDao.getById(id)
    if (!author) {
        throw notFound("Author")
    }
    return author
}

// create new author
const create = async (body) => {
    const exists = await authorDao.findByNameCountry(body.name, body.country)    // if exist in db
    if (exists) {
        throw alreadyExists("Author")
    }
    return authorDao.createRow(body)
}

// put  full update author 
const replace = async (id, body) => {
    const author = await authorDao.getById(id)
    if (!author) {
        throw notFound("Author")
    }
    const exists = await authorDao.findAuthor(body.name, body.country, id)

    if (exists && exists.id !== Number(id)) {    // ignore same
        throw alreadyExists("Author")
    }
    return authorDao.replaceRow(id, body)
}

// patch update author
const modify = async (id, body) => {
    const author = await authorDao.getById(id)
    if (!author) {
        throw notFound("Author")
    }

    const newName = body.name ?? author.name
    const newCountry = body.country ?? author.country

    const exists = await authorDao.findAuthor(newName, newCountry, id)

    if (exists && exists.id !== Number(id)) {
        throw alreadyExists("Author")
    }
    return authorDao.modifyRow(id, body)
}

// delete author
const remove = async (id) => {
    const author = await authorDao.getById(id)

    if (!author) {
        throw notFound("Author")
    }
    return authorDao.deleteRow(id)
}

// exports
module.exports = { listAll, findById, create, replace, modify, remove }

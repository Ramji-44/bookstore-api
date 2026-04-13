
const AuthorDao = require("../../dao/author.dao")

// get all authors 
const AllAuthors = async () => {
    return AuthorDao.getAll()    // calls the dao
}

// get author by id 
const getAuthorById = async (id) => {
    return AuthorDao.getAuthorById(id)
}

// create new author
const createAuthor = async (body) => {
    return AuthorDao.postAuthor(body)
}

// update author
const updateAuthorById = async (id,body) => {
    return AuthorDao.putAuthor(id,body)
}

// patch update author
const patchAuthorById = async(id,body) => {
    return AuthorDao.patchUpdate(id,body)
}

// delete author
const deleteAuthorById = async(id) => {
    return AuthorDao.removeAuthor(id)
}

// exports
module.exports = { AllAuthors, getAuthorById, createAuthor, updateAuthorById, patchAuthorById, deleteAuthorById}

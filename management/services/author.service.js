
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
const createAuthor = async (data) => {
    return AuthorDao.insertAuthor(data)
}

// update author
const updateAuthorById = async (id,data) => {
    return AuthorDao.fullUpdate(id,data)
}

// patch update author
const patchAuthorById = async(id,data) => {
    return AuthorDao.patchUpdate(id,data)
}

// delete author
const deleteAuthorById = async(id) => {
    return AuthorDao.remove(id)
}

// exports
module.exports = { AllAuthors, getAuthorById, createAuthor, updateAuthorById, patchAuthorById, deleteAuthorById}

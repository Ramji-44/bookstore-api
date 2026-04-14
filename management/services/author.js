
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
    if(!body.name){
        throw new Error ("Name is required")
    }

    const authorExists = await AuthorDao.findByName(body.name.toLowerCase().trim())    // if exist in db
    if(authorExists){
        throw new Error ("Author already exists")
    }
    return AuthorDao.postAuthor(body)
}


// put  full update author 
const updateAuthorById = async (id,body) => {
    if(body.name){
     const authorExists = await AuthorDao.findByName(body.name.toLowerCase().trim());

    // ignore same 
    if (authorExists && authorExists.id != id) {
        throw new Error("Author already exists");
    }
}   
    return AuthorDao.putAuthor(id,body)
}

// patch update author
const patchAuthorById = async(id,body) => {
    if (body.name) {

        const authorExists = await AuthorDao.findByName(body.name.toLowerCase().trim());

        if (authorExists && authorExists.id != id) {
            throw new Error("Author already exists");
        }
    }
    return AuthorDao.patchUpdate(id,body)
}

// delete author
const deleteAuthorById = async(id) => {
    return AuthorDao.removeAuthor(id)
}

// exports
module.exports = { AllAuthors, getAuthorById, createAuthor, updateAuthorById, patchAuthorById, deleteAuthorById}

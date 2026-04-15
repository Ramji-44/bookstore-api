
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
    if(!body.name){
        throw new Error ("Name is required")
    }

    const authorExists = await AuthorDao.findByName(body.name.toLowerCase().trim())    // if exist in db
    if(authorExists){
        throw new Error ("Author already exists")
    }
    return AuthorDao.createRow(body)
}


// put  full update author 
const replace = async (id,body) => {
    if(body.name){
     const authorExists = await AuthorDao.findByName(body.name.toLowerCase().trim());

    // ignore same 
    if (authorExists && authorExists.id != id) {
        throw new Error("Author already exists");
    }
}   
    return AuthorDao.replaceRow(id,body)
}

// patch update author
const modify = async(id,body) => {
    if (body.name) {

        const authorExists = await AuthorDao.findByName(body.name.toLowerCase().trim());

        if (authorExists && authorExists.id != id) {
            throw new Error("Author already exists");
        }
    }
    return AuthorDao.modifyRow(id,body)
}

// delete author
const remove = async(id) => {
    return AuthorDao.deleteRow(id)
}

// exports
module.exports = { listAll, findById, create, replace, modify, remove}


const db = require("./models")

// get all authors
const getAll = async () => {
    return db.Author.findAll()
}

// get author by pk(id)
const getAuthorById = async(id) => {
    return db.Author.findByPk(id)
}

// create new author
const insertAuthor = async (data) => {
    return db.Author.create(data)
}

// put full update
const fullUpdate = async(id,body) => {
    const author = await db.Author.findByPk(id)

    if(!author){    // if not found, return null -> nothing found
        return null
    }
    author.name = body.name
    author.country = body.country

    return await author.save()   // save changes.
}

// patch  partial update
const patchUpdate = async(id,body) => {
    const author = await db.Author.findByPk(id)

    if(!author){
        return  null
    }
    return await author.update(body)   // update() -> update and save changes
}


// delete author
const remove = async(id) => {
    const author = await db.Author.findByPk(id)
    if(!author){
        return null
    }
    await author.destroy()
    return true  // for deletion success
}


module.exports = { getAll, getAuthorById, insertAuthor, fullUpdate, patchUpdate, remove}

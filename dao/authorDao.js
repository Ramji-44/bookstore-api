
const db = require("./models")

// get all authors
const getAll = async () => {
    return db.Author.findAll()
}

// get author by pk(id)
const getById = async(id) => {
    return db.Author.findByPk(id)
}
// finds Name 
const findByName = async (name) => {
    return db.Author.findOne({
        where: { name }
    })
}

// create new author
const createRow = async (data) => {
    data.name = data.name.toLowerCase().trim()
    return db.Author.create(data)
}

// put full update
const replaceRow = async(id,body) => {
    const author = await db.Author.findByPk(id)

    if(!author){    // if not found, return null -> nothing found
        return null
    }
    // checks the same data is updating or the data changed
    const checkSameData = author.name === body.name && author.country === body.country
    if(checkSameData) return {Nochange : true}

    author.name = body.name ?? author.name
    author.country = body.country ?? author.country

    return await author.save()   // save changes.
}

// patch  partial update
const modifyRow = async(id,body) => {
    const author = await db.Author.findByPk(id)

    if(!author){
        return  null
    } 
    // check if data is in same or changed.. 
    const checkSameData = author.name === body.name && author.country === body.country
    if(checkSameData) return {Nochange : true}

    return await author.update(body)   // update() -> update and save changes
}


// delete author
const deleteRow = async(id) => {
    const author = await db.Author.findByPk(id)
    if(!author){
        return null
    }
    await author.destroy()
    return true  // for deletion success
}


module.exports = { getAll, getById, findByName, createRow, replaceRow, modifyRow, deleteRow}

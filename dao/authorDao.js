
const db = require("./models")

// get all authors
const getAll = async () => {
    return db.Author.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] }})
}

// get author by pk(id)
const getById = async (id) => {
    return db.Author.findByPk(id, { attributes: { exclude: ["createdAt", "updatedAt"] } })
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
    const author = await db.Author.create(data)
    return createdUpdated(author)
}

// put full update
const replaceRow = async (id, body) => {
    const author = await db.Author.findByPk(id)

    if (!author) {    // if not found, return null -> nothing found
        return null
    }
    // checks the same data is updating or the data changed
    const checkSameData = author.name === body.name && author.country === body.country
    if (checkSameData) return { Nochange: true }

    author.name = body.name ?? author.name
    author.country = body.country ?? author.country

    const putUpdate = await author.save()   // save changes.
    return createdUpdated(putUpdate)
}

// patch  partial update
const modifyRow = async (id, body) => {
    const author = await db.Author.findByPk(id)

    if (!author) {
        return null
    }
    // check if data is in same or changed.. 
    const checkSameData = author.name === body.name && author.country === body.country
    if (checkSameData) return { Nochange: true }

    const patchUpdate = await author.update(body)   // update() -> update and save changes
    return createdUpdated(patchUpdate)
}


// delete author
const deleteRow = async (id) => {
    const author = await db.Author.findByPk(id)
    if (!author) {
        return null
    }
    await author.destroy()
    return true  // for deletion success
}


// remove createdAt, updatedAt in response  at the post,put,patch methods
function createdUpdated(data) {
    if (!data) return data

    const values = data.toJSON()
    delete values.createdAt
    delete values.updatedAt
    return values
}

module.exports = { getAll, getById, findByName, createRow, replaceRow, modifyRow, deleteRow }

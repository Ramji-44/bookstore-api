const db = require("./models")
const { Op } = require("sequelize")

// get all authors
const getAll = async () => {
    return db.Author.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        order: [["name", "ASC"]]
    })
}

// get author by pk(id)
const getById = async (id) => {
    return db.Author.findByPk(id, { attributes: { exclude: ["createdAt", "updatedAt"] } })
}

// finds Name and country
const findByNameCountry = async (name, country) => {
    return db.Author.findOne({
        where: {
            name: name,
            country: country
        }
    })
}

// check duplicate
const findAuthor = async (name, country, id) => {
    return db.Author.findOne({
        where: {
            name: name,
            country: country,
            id: { [Op.ne]: id }
        }
    })
}

// create new author
const createRow = async (data) => {
    const author = await db.Author.create(data)
    return createdUpdated(author)
}

// put full update
const replaceRow = async (id, body) => {
    const author = await db.Author.findByPk(id)

    if (!author) {    // if not found, return null -> nothing found
        return null
    }
    author.name = body.name
    author.country = body.country

    const putUpdate = await author.save()   // save changes.
    return createdUpdated(putUpdate)
}

// patch  partial update
const modifyRow = async (id, body) => {
    const author = await db.Author.findByPk(id)

    if (!author) {
        return null
    }
    const patchUpdate = await author.update(body)   // update() -> update and save changes
    return createdUpdated(patchUpdate)
}

// delete author
const deleteRow = async (id) => {
    const author = await db.Author.findByPk(id)
    if (!author) {
        return null
    }
    return await author.destroy()
}


// remove createdAt, updatedAt in response  at the post,put,patch methods
function createdUpdated(data) {
    if (!data) return data

    const values = data.toJSON()   // simplify to JSON().
    delete values.createdAt
    delete values.updatedAt
    return values
}

module.exports = { getAll, getById, findByNameCountry, findAuthor, createRow, replaceRow, modifyRow, deleteRow }

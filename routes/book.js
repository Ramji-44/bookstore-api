
const express = require("express")
const router = express.Router()

const bookController = require("../controllers/book")   // book controller
const validate = require("../management/middleware/validation")    // validation.

const { getByIdVS, PostBookVS, putBookVS, patchBookVS, deleteBookVS } = require("../management/middleware/bookValidationSchema")
const { checkSchema } = require("express-validator")

// book route
router.get('/', bookController.getBooks)   // all books
router.get('/:id', checkSchema(getByIdVS), validate, bookController.getById)   // find ny id
router.post('/', checkSchema(PostBookVS), validate, bookController.createBook)    // post
router.put('/:id', checkSchema(putBookVS), validate, bookController.updateBook)   // update author
router.patch('/:id', checkSchema(patchBookVS), validate, bookController.patchBook)  // partial update
router.delete('/:id', checkSchema(deleteBookVS), validate, bookController.deleteBook)  // delete book

module.exports = router 
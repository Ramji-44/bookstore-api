
const express = require("express")
const router = express.Router()

const bookController = require("../controllers/book")   // book controller
const validate = require("../management/middleware/validation")    // validation.

const {getByIdVS, PostBookVS, putBookVS, patchBookVS, deleteBookVS } = require("../management/middleware/book.validationSchema")
const { checkSchema } = require("express-validator")

// book route
router.get('/', bookController.getAllBooks)   // all books
router.get('/:id', checkSchema(getByIdVS), validate, bookController.getByid)   // find ny id
router.post('/', checkSchema(PostBookVS), validate, bookController.postBook)    // post
router.put('/:id', checkSchema(putBookVS), validate, bookController.putBook)   // update author
router.patch('/:id', checkSchema(patchBookVS), validate, bookController.patchBook)  // partial update
router.delete('/:id', checkSchema(deleteBookVS), validate, bookController.deleteBook)  // delete book

module.exports = router 
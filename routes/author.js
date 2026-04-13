
const express = require("express")
const router = express.Router()

const authorController = require("../controllers/author")  // author contoller

const validate = require("../management/middleware/validation")    // validation.
const { getByIdValidSchema, postValidSchema, putValidSchema, patchValidSchema, deleteValidSchema } = require("../management/middleware/author.validationSchema")
const { checkSchema } = require("express-validator")

// author route
router.get('/', authorController.getAllauthors)  // All authors
router.get('/:id', checkSchema(getByIdValidSchema), validate,  authorController.getById)     // findbyid
router.post('/', checkSchema(postValidSchema), validate, authorController.createNewAuthor)  // post
router.put('/:id', checkSchema(putValidSchema), validate, authorController.updateAuthor)  // update author
router.patch('/:id', checkSchema(patchValidSchema), validate, authorController.patchAuthor)  // partial update
router.delete('/:id', checkSchema(deleteValidSchema), validate, authorController.deleteAuthor) // delete author


module.exports = router

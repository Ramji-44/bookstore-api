
const express = require("express")
const router = express.Router()

const Controller = require("../controllers/author.controller")

router.get('/', Controller.getAllauthors)  // All authors
router.get('/:id', Controller.getById)     // findbyid
router.post('/', Controller.createNewAuthor)  // post
router.put('/:id', Controller.updateAuthor)  // update author
router.patch('/:id', Controller.patchAuthor)  // partial update
router.delete('/:id', Controller.deleteAuthor) // delete author

module.exports = router

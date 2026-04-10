

import express from "express"
const router = express.Router()

import controller from "../AuthorController.mjs"



router.get('/', controller.getBooks)


export default router

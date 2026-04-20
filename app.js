const express = require("express")
const authorRoutes = require("./routes/author")
const bookRoutes = require("./routes/book")
const app = express()

app.use(express.json())

app.use("/authors", authorRoutes)    // author routes only
app.use("/books", bookRoutes)        // books routes only 

// route test
app.get("/", (req, res) => {
    res.json({ Message: "API is working " })
})

module.exports = app
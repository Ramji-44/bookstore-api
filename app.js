const express = require("express")
const authorRoutes = require("./routes/author.route")
const app = express()

app.use(express.json())

app.use("/authors", authorRoutes)    // author routes only

// route test
app.get("/", (req,res) => {
    res.json({Message : "API is working "})
})

module.exports = app
require("dotenv").config()  // .env

const app = require("./app")    // app.mjs(express app)
const { testConnection } = require("./dao/db")  // check connection with db 

const port = process.env.PORT || 8080

const Server = async () => {
    try {
        await testConnection()   // connect db

        app.listen(port, 'localhost', () => {     // server starts
            console.log(`server running on port ${port} !`)
        })
    }
    catch (err) {
        console.log("Failed to start server due to : ", err.message)
    }
}

Server()   
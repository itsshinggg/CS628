require("./database").connect()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1> Hello </h1>')
})

app.listen(3000, () => {
    console.log("Server started on Port 3000")
})
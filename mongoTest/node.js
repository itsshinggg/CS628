require("./database").connect()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Server is working </h1>')
})
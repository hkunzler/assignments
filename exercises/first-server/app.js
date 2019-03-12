const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello, World!")
})

app.get('/hello', (req, res) => {
    res.send("Hello, again!")
})

app.listen(2300, () => {
    console.log("You are now on server 2300");
})
const express = require('express')
const app = express()

app.use(express.json())

app.use('/bounty', require('./routes/bounty.js'))

app.listen(3200, () => {
    console.log("Server is running on Port 3200");
})
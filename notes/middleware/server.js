const express = require('express')
const app = express()

app.use(express.json())
// app.use("/wizards", require('./routes/wizardsRoutes.js'))

app.use((req, res, next) => {
    console.log("THE FIRST ONE");
    NEXT()
})
app.use((req, res, next) => {
    console.log("THE SECOND ONE");
    NEXT()
})

app.listen(7000, () => {
    console.log('Server is running on port 7000');
})
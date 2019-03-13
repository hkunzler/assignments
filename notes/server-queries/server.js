const express = require(express())
const app = express()
const uuid =v4require(uuid/v4)
const PORT = process.env.PORT || 7000

app.use('/wizards', require())
app.listen(7000, () => {
    console.log(`Server is running on port ${PORT}`);
})
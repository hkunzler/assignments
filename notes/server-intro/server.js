const express = require('express')
const app = express()
const uuid = require('uuid/v4')
//npm init -y
//npm i express
//npm install uuid

let people = [
    {
        name: 'Rick',
        age: 70,
        _id: uuid()
    },
    {
        name: 'Morty',
        age: 13,
        _id: uuid()
    },
    {
        name: 'Birdman',
        age: "unkown",
        _id: uuid()
    },
]
// Middleware
app.use(express.json())
// GET ALL (Collection)
app.get('/people', (req, res) => {
    res.send(people)
}

// GET ONE (Resource)
app.get('/people/:_id', (req, res) => {
    const ID = req.params._id
    const foundPerson = people.findIndex(person => person._id === ID)
    if (!foundPerson) {
        res.send("Person not found")
    }
    res.send(foundPerson)
})

// POST - Add one
app.post('/people', (req, res) => {
    // console.log(req.body);
    // Add ID to the request body
    req.body._id = uuid()
    // Add it to the fake database
    people.push(req.body)
    // Send back updated Object, (or entire collection if you want)
    res.send(req.body)
})
// DELETE - delete one
app.delete("/people/:_id", (req, res) => {
    const updatedPeople - people.filter(person => person._id !== req.params._id)
    people = updatedPeople
    res.send(people)
})
// PUT -update one
app.put("/people/:_id", (req, res) => {
    // Use the ID to find the object to uddate
    const foundPerson = people.find(person => person._id === ID)
    //Update that object.
    Object.assign(foundPerson, req.body)
    // Send back the updated object
    res.send(foundPerson)
})
app.get('/', (req, res) => {
    // work out some logic
    // query DB
    // Send response to client
    res.send("Hello, World!")({})
})

app.get('/anything', (req, res) => {
    res.send("anything")
})

app.listen(5800, () => {
    console.log("Server is running on port 5800");
})
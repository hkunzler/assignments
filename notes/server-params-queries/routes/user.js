const express = require('express')
const userRouter = express.Router
const uuid = require('uuid')

// Fake Database
let users = [
    {
        name: "Rick",
        age: 70,
        pets: ["hippo", "mole rat"],
        _id: uuid()
    },
    {
        name: "Morty",
        age: 13,
        pets: ["Rick"],
        _id: uuid()
    }
]

userRouter.route("/")
    .get((req, res) => {
        res.send(users)
    })
    .get((req, res) => {
        const newUser = req.body
        req.body._id = uuid()
        users.push(req.body)
        res.send(req.body)
    })

userRouter.route('/:_id')
    .get((req, res) => {
        const foundUser = users.find(user => user._id === req.params._id)
        res.send(foundUser)
    })
    .delete((req, res) => {
        const updatedDB = users.filter(user => user._id !== req.params._id)
        users = updatedDB
        res.send("User succesfully deleted")
    })
    .put((req, res) => {
        const foundUser = users.find(user => user._id === req.params._id)
        Object.assign(foundUser, req.body)
        res.send(foundUser)
    })
// Get all
// userRouter.get('/', (req, res) => {
//     res.send(users)
// })

// Get one
// userRouter.get("/:_id", (req, res) => {
//     const foundUser = users.find(user => user._id === req.params._id)
//     res.send(foundUser)
// })

// Post (Add one)
// userRouter.post('/', (req, res) => {
//     const newUser = req.body
//     req.body._id = uuid()
//     users.push(req.body)
//     res.send(req.body)
// })
    
// Delete
// userRouter.delete('/:_id', (req, res) => {
//     const updatedDB = users.filter(user => user._id !== req.params._id)
//     users = updatedDB
//     res.send("User succesfully deleted")
// })

// Put
// userRouter.put('/:_id', (req, res) => {
//     const foundUser = users.find(user => user._id === req.params._id)
//     Object.assign(foundUser, req.body)
//     res.send(foundUser)
// })



module.exports(userRouter)
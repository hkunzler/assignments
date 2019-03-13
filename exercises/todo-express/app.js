const express = require('express')
const app = express()
uuid = require('uuid/v4')
// {
//     'name': 'The name',
//     'description': 'The description of the todo'
//     'imageUrl': 'http://www.myimage....'
//     'completed': false
//     '_id': '23k4lh23h2'
// }

let todo = [
    {
        name: 'eat',
        description: 'eat description',
        imageUrl: 'https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        complete: 'false',
        _id: uuid()
    },
    {
        name: 'drink',
        description: 'drink description',
        imageUrl: 'https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        complete: 'false',
        _id: uuid()
    },
    {
        name: 'game',
        description: 'game description',
        imageUrl: 'https://images.unsplash.com/photo-1529448155365-b176d2c6906b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        complete: 'false',
        _id: uuid()
    }
]

app.use(express.json())

app.get('/todo', (req, res) => {
    res.send(todo)
})

app.get('/todo/:_id', (req, res) => {
    const ID = req.params._id
    const todoItem = todo.find(todo => todo._id === ID)
    if (!todoItem) {
        res.send("Item not found")
    } 
    res.send(todoItem)
})

app.post('/todo', (req, res) => {
    req.body._id = uuid()
    todo.push(req.body)
    res.send(req.body)
})

app.delete('/todo/:_id', (req, res) => {
    const updatedTodo = todo.filter(todo => todo._id !== req.params._id)
    todo = updatedTodo
    res.send(todo)
})

app.put('/todo/:_id', (req, res)  => {
    const foundItem = todo.find(todo => todo._id === req.params._id)
    Object.assign(foundItem, req.body)
    res.send(foundItem)
})

app.listen(2300, () => {
    console.log("Server is running on port 2300");
})
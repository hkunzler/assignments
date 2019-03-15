const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

const fakeDB = [{}, {}]

// GET ALL
todoRouter.get('/', (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            // handleError
            res.status(500)
            return res.send(err)
        }
        // Send back response
        return res.status(200).send(todos)
    })
})

// POST Add One
todoRouter.post('/', (req, res) => {
    // Create the new todo object using our Schema (blueprint)
    const newTodo = new Todo(req.body)
    newTodo.save((err, newTdoObj) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newTodoObj)
    })
})

// GET ONE
todoRouter.get('/:_id', (req, res) => {
    //  This object is our filtering criteria for what we are asking for
    Todo.findOne({_id: req.params._id}, (err, foundTodo) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundTodo)
    })
})

// DELETE - Remove One
todoRouter.delete('/:_id', (req, res) => {
    Todo.findOneAndRemove({ _id: req.params._id }, (err, deletedTodo) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Successfully deleted Item with ID ${deletedTodo.title}`)
    })
})

//PUT - Updated One
todoRouter.put('/_id', (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params._id }, // Find the todo with this _id
        req.body, // Update it with this Object
        { new: true },
        { err, updatedTodo } => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(updatedTodo)
    })
})

module.exports = todoRouter
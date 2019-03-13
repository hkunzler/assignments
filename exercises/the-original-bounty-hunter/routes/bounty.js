const express = require('express')
const userRouter = express.Router()
const uuid = require('uuid/v4')

let bountyList = [
    {
        firstName: 'Darth',
        lastName: 'Vader',
        living: true,
        bounty: 42,
        type: 'Sith',
        _id: uuid()
    },
    {
        firstName: 'Obi-Wan',
        lastName: 'Kenobi',
        living: false,
        bounty: 23,
        type: 'Jedi',
        _id: uuid()
    }
]

userRouter.route('/')
    .get((req, res) => {
        res.send(bountyList)
    })
    .post((req, res) => {
        req.body._id = uuid()
        bountyList.push(req.body)
        res.send(req.body)
    })

userRouter.route('/:_id')
    .get((req, res) => {
        console.log(req.params._id);
        const foundBounty = bountyList.find(bounty => bounty._id === req.params._id)
        res.send(foundBounty)
    })
    .delete((req, res) => {
        const updatedDB = bountyList.filter(bounty =>
            bounty._id !== req.params._id)
            bountyList = updatedDB
            res.send("Bounty successfully eliminated")
    })
    .put((req, res) => {
        const foundBounty = bountyList.find(bounty => bounty._id === req.params._id)
        Object.assign(foundBounty, req.body)
        res.send(foundBounty)
    })

    module.exports = userRouter
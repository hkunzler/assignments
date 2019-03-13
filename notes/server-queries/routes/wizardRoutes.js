const express = require('express')
const uuid = require('uuid/v4')
const wizardRouter = express.Router()

let wizards = [{
        name: "Harry",
        age: 17,
        favSubjects: ["Defence against Dark Arts", 'Quidditch'],
        _id: uuid()
    },
    {
        name: "Hagrid",
        age: 85,
        favSubjects: ["Beast Training", "Beer", "Groundskeeping"],
        _id: uuid()
    },
    {
        name: "Hermione",
        age: 16,
        favSubjects: ["Potions", "Spells", "Charms"],
        _id: uuid()
    },
    {
        name: "Ron",
        age: 15,
        favSubjects: ["none"],
        _id: uuid()
    },
    {
        name: "Voldemort",
        age: 70,
        favSubjects: ["Dark Arts", "Doing bad stuff"],
        _id: uuid()
    }
]
wizardRouter.get('/search', (req, res) => {
    const { maxAge, isGood } = req.query
    if (maxAge && isGood) {
        const foundWizards = wizards.filter(wizard => {
            if (wizard.age <= Number(maxAge) && wizard.isGood.toString() === isGood) {
                return wizard
            }
        })
        res.send(foundWizards)
    } else if (maxAge) {
        const foundWizards = qizards.filter(wizard => {
            if (wizard.age <= Number(maxAge)) {
                return wizard
            }
        })
        res.send(foundWizards)
    } else if (isGood) {
        const foundWizards = qizards.filter(wizard => {
            if (wizard.isGood.toString() === isGood) {
                return wizard
            }
        })
        res.send(foundWizards)
    }
})
app.get("/wizards/search", (req, res) => {
    console.log(req.query);
})

app.get("/wizards", (req, res) => {
    res.send(wizards)
})

app.get("/wizards/:_id", (req, res) => {
    const foundWizard = wizards.find(wizard => wizard._id === req.params._id)
    res.send(foundWizard)
})


module.exports = wizardRouter
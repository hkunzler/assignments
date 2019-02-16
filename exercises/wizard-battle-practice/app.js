var wizards = [
    {
        name: "Edwin Odesseiron",
        age: 37,
        alignment: "lawful evil"
    },
    {
        name: "Harry Potter",
        age: 21,
        alignment: "neutral good"
    },
    {
        name: "Hermony Granger",
        age: 21,
        alignment: "lawful good"
    },
    {
        name: "Ronny the Bear",
        age: 21,
        alignment: "neutral good"
    },
    {
        name: "Gandalf",
        age: 100,
        alignment: "neutral good"
    }
]

wizards.forEach(wizards => {
    console.log(wizards.name)
})
 wizards.forEach(wizards => {
    wizards.isAlive = true
 });

var neutralGood = []
 
wizards.forEach((wizards) => {
    if (wizards.alignment === "neutral good") {
        neutralGood.push(wizards)
    }
})

console.log(wizards.map(wizards => { return wizards.alignment }).indexOf('lawful good'))

wizards.every((wizards) => {
    console.log(wizards.isAlive.every === true)
})

wizards.some((wizards) => {
    console.log(wizards.alignment.some === " neutral good")
})
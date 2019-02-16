// let name = "John"
// const age = 101
// let pets = ["cat", "dog"]
// let petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             let name = "fluffy"
//         } else {
//             let name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     } 
//     return name
// }

// console.log(runForLoop());


// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     // return arr.map(function (carrot) {
//     //     return { type: "carrot", name: carrot }
//     // })
//     return arr.map(({ type,  name }) => { type: "carrot" }, {name: arr})
// }
// console.log(mapVegetables(carrots))

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => !!person.friendly)
// }
// console.log(filterForFriendly(people))

// const doMathSum = ((a, b) => a + b)

// console.log(doMathSum(3, 3))

// const produceProduct = ((a, b) => a * b)

// console.log(produceProduct(4, 3))

// const printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

// console.log(printString())


// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
// ];

// const filterForDogs = animals.filter(animal => (animal.type === "dog") ? true : false)

// console.log(filterForDogs);

let location = "Hawaii"
let name = "Janice"

console.log(`Hi ${name}!

Welcome to ${location}. 

I hope you enjoy your stay.
Please ask the president of
Hawaii if you need anything.`)
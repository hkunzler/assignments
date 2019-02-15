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


const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function (carrot) {
        return { type: "carrot", name: carrot }
    })
}
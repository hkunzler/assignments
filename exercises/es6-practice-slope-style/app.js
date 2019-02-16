// function collectAnimals(...animals) {
//     console.log(animals)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables) {
//     return food = {
//         fruit,
//         sweets, 
//         vegetables
//     }
// }

// console.log(combineFruit(["apple", "pear"],
//     ["cake", "pie"],
//     ["carrot"])
// )

// const vacation = {
//     location: "Burly Idaho",
//     duration: "2 weeks"
// };

// const {location, duration} = vacation

// function parseSentence() {
//     return `We're going to have a good time in ${location} for ${duration}`
// }

// console.log(parseSentence(vacation))

// function returnFirst(items) {
//     const [firstItem] = items; /*change this line to be es6*/
//     return firstItem
// }

// console.log(returnFirst([1, 4, 5]));


// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr) {
//     [firstFav, secondFav, thirdFav] = favoriteActivities;
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities));



// function combineAnimals(...animals) {
//     console.log([].concat(...animals))

// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// (combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));
// // ["dog", "cat", "mouse", "jackolope", "platypus"]


// function product(...numbers) {
//     return numbers.reduce((acc, number) => acc * number);
// }
// console.log(product(4, 2, 5, 7, 3))


// function unshift(...arr) {
//     return [].concat(...arr);
// }

// console.log([1, 2, 42], 4, 2, 5, 7, 3);


function populatePeople(names) {
    names = names.map(name => name.split(" "))
    names.map(([firstName, lastName] = names) => console.log({
        firstName,
        lastName
    }))

}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
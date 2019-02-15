// EMASCRIPT 6 (ES6)

// const & let (variable declarations)

const dob = "June 10, 1239";
let age = 20;

function myFunction() {
  if (10 === 10) {
    console.log(dob); // Will work because you can reference an outer scope
    let a = "Hello";
  }
  return a; // Will not work because you cannot reference an inner scope
}


// Arrrow Functions  (Fat arrow functions)

function add(num1, num2) {
  return num1 + num2;
}

const subtract = function(num1, num2) {
  return num1 - num2;
};
// Same as above
const subtract = (num1, num2) => {
  return num1 - num2;
};
// Also same
const subtract = (num1, num2) => num1 - num2;

const returnLastIndex = arr => arr[arr.length - 1];

const printNum = num1 => {
  return num1;
};

// Function expressions can replace 'function' with '=>'
    // => Single parameter do not need ()
    // => has an implicit return
    // => does not include 'this'

const arr = [1, 2, 3, 4, 5, 6];
const evens = arr.filter(function(num) {
  if (num % 2 === 0) {
    return num;
  }
});
console.log(evens);

// Same

var arr = [1, 2, 3, 4, 5, 6];
var evens = arr.filter(num => num % 2 === 0 && num);

console.log(evens);


const arr = [1, 2, 3]

const plus2 = arr.map(function(num){
    return num + 2
})

console.log(plus2)

// Same

const plus2ES6 = arr.map(num => num + 2);

console.log(plus2ES6)


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = nums.reduce(function(final, num){
    return total + num
}, 0)

console.log(sum)

// Sum

const sumES6 = nums.reduce((total, num) => {
    if(num % 2 === 0){
        total += num
    }
    }, 0)

console.log(sumES6)

const unsorted = [5, 23, 67, 223, 4, 56, 21]

const sorted = unsorted.sort(function(a, b){
    return a - b
})
console.log(sorted)

const sortedES6 = unsorted.sort((a, b) => a - b)
console.log(sortedES6)

// Default Parameters
function sum(num1 = 0, num2 = 0){ // In case the user didn't put in a second number
    return num1 + num2
}

console.log(sum(1))

const sum = (num1 = 0) => num1 + num2

console.log(sume(3))

// Template Literals
const person = {
    name: "Morty",
    age: 13,
    isScared: true,
    catchPhrase: "awh jeez"
}

console.log("Hi, my name is " + person.name + ", and I am " + ", and my catchphrase is " + person.catchPhrase + "!")

console.log(`Hi my name is ${person.name}, and I am ${person.age}, and my catchphrase is ${person.catchphrase}!`)

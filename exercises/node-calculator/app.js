function add(num1, num2){
    return ("\nThe result is: " + (num1 + num2))
}
function sub(num1, num2){
    return ("\nThe result is: " + (num1 - num2))
}
function mul(num1, num2){
    return ("\nThe result is: " + (num1 * num2))
}
function div(num1, num2){
    return ("\nThe result is: " + (num1 / num2))
}

var readline = require("readline-sync")

var num1 = readline.question("Please enter your first number: ")
var num2 = readline.question("\nPlease enter your second number: ")
var operation = readline.question("\nPlease enter the operation to perform: add, sub, mul, div: ")

num1 = parseInt(num1)
num2 = parseInt(num2)

if(operation === "add"){
    console.log(add(num1, num2));
} else if(operation === 'sub'){
    console.log(sub(num1, num2));
} else if(operation === 'mul'){
    console.log(mul(num1, num2));
} else if(operation === 'div'){
    console.log(div(num1, num2));
} else{
    console.log("\nERROR: Please try running program again.")
}

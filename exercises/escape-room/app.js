var readline = require("readline-sync");

var name = readline.question("-What is your name? \n");
console.log("-Hello, " + name + ". Welcome to the escape room.");

// var path = readline.question("Choose Path \nPut hand in hole - 1 \nFind the key - 2 \nOpen the door - 3\n")

var options = ["Put hand in hole", "Find the key", "Open the door"];
var gameOver = false
var key = false


while(!gameOver){
    var choice = readline.keyInSelect(options, "\nWhat would you like to do? \n")
    if(choice === 0){
        console.log("\nYou DIED.\n")
        gameOver = true
    } else if(choice === 1){
        if(key === true){
            console.log("\nYou already found a key!\n")
        } else{
        console.log("\nYou found a key!\n")
    }
        key = true
    } else if(choice === 2){
        if(key === true){
            console.log("\nThe key unlocks the door. You escaped the room!\n")
            gameOver = true
        } else{
            console.log("\nThe door won't open. It looks like it needs a key\n")
        }
    } else if (choice === -1){
        console.log("You quitter")
        gameOver = true
    }
}
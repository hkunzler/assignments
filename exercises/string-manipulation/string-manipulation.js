var ask = require('readline-sync');

var name = ask.question("What is your name?\n");
// console.log("\nHello, " + name.toUpperCase());
var hello = "\nHello, " + name.toUpperCase();
if(name.length<=5){
    var nameLength = " Huh, only " + name.length + " letters? That's a short name.\n";
    console.log(hello.concat(nameLength));
} else {
    var nameLength = " Woah! " + name.length + " letters. That's a long name.\n";
    console.log(hello.concat(nameLength));
}


var age = ask.question("How old are you?\n");

console.log("\nWow! " + age + "? \nYou're frickin' old, dude.");

var longAnswer = ask.question("Tell me your name and age i.e. 'my name is (name) and I am (age)'\n");

var half = longAnswer.length / 2;

console.log(longAnswer.substr(half, longAnswer.length-1));

var chooseWhereToSplit = ask.question("Your original message was: " + longAnswer + "\n Where you you like to split it? i.e 14\n")

console.log(longAnswer.substr(chooseWhereToSplit, longAnswer.length - 1))
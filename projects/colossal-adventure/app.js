
// var hangmanStages = [
//     `
//     `,
//     `
//     |
//     |
//     |
//     |
//     |
//     |
//     |
//     `,
//     `
//     |---------
//     |
//     |
//     |
//     |
//     |
//     |
//     `,
//     `
//     |---------
//     |    |
//     |
//     |
//     |
//     |
//     |
//     `,
//     `
//     |---------
//     |    |
//     |    O
//     |
//     |
//     |
//     |
//     `,
//     `
//     |---------
//     |    |
//     |    O
//     |    |
//     |
//     |
//     |
//     `,
//     `
//     |---------
//     |    |
//     |    O
//     |    |-
//     |
//     |
//     |
//     `,
//     `
//     |---------
//     |    |
//     |    O
//     |   -|-
//     |
//     |
//     |
//     `,
//     `
//     |---------
//     |    |
//     |    O
//     |   -|-
//     |     \\
//     |
//     |
//     `,
//     `
//     |---------
//     |    |
//     |    O
//     |   -|-
//     |   / \\
//     |
//     |
//     `,
//     ];
//     var stage = 0;
//     var delayMs = 500;
//     var drawHangman = function(){
//       console.log(hangmanStages[stage]);
//       stage++;
//       if (stage < hangmanStages.length) {
//         setTimeout(drawHangman, delayMs); // again!
//       }
//     }
//     setTimeout(drawHangman, delayMs);

function print(name, health, inventory){
    console.log("Player Name: " + name + "\nPlayer Health: " + health + "\nInventory: " + inventory)
}

function walk(){

}

// console.log(`
//  /$$      /$$             /$$     /$$                                 /$$$$$$$$                  /$$                                    
// | $$$    /$$$            | $$    | $$                                | $$_____/                 | $$                                    
// | $$$$  /$$$$  /$$$$$$  /$$$$$$  | $$$$$$$   /$$$$$$   /$$$$$$       | $$    /$$   /$$  /$$$$$$$| $$   /$$  /$$$$$$   /$$$$$$   /$$$$$$$
// | $$ $$/$$ $$ /$$__  $$|_  $$_/  | $$__  $$ /$$__  $$ /$$__  $$      | $$$$$| $$  | $$ /$$_____/| $$  /$$/ /$$__  $$ /$$__  $$ /$$_____/
// | $$  $$$| $$| $$  \\ $$  | $$    | $$  \\ $$| $$$$$$$$| $$  \\__/      | $$__/| $$  | $$| $$      | $$$$$$/ | $$$$$$$$| $$  \\__/|  $$$$$$ 
// | $$\\  $ | $$| $$  | $$  | $$ /$$| $$  | $$| $$_____/| $$            | $$   | $$  | $$| $$      | $$_  $$ | $$_____/| $$       \\____  $$
// | $$ \\/  | $$|  $$$$$$/  |  $$$$/| $$  | $$|  $$$$$$$| $$            | $$   |  $$$$$$/|  $$$$$$$| $$ \\  $$|  $$$$$$$| $$       /$$$$$$$/
// |__/     |__/ \\______/    \\___/  |__/  |__/ \\_______/|__/            |__/    \\______/  \\_______/|__/  \\__/ \\_______/|__/      |_______/                                                                                                                                   
                                                                                                                                        
// `)
var ask = require("readline-sync")

console.log(`fun message\n`)

var name = ask.question(`Enter name to play\n`)

var option = ask.question(name + ", you ready to hit up some more hookers?")

var health = 100;

var inventory = [];
option = option.toLowerCase()
if(option === "print"){
    print(name, health, inventory);
} else if(option === 'W'){
    walk() 
}
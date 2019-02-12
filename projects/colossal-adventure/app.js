function print(name, inventory) {
    var inventoryChoice = ask.question("Player Name: " + name + "\nPlayer health: " + inventory.health + "\nInventory: cocaine: " + inventory.cocaine + ", Money: " + inventory.money + ", Condoms: " + inventory.condoms + ", Prostitutes: " + inventory.prostitutes + "\nEnter 'exit' to leave inventory\n")
    inventoryChoice = inventoryChoice.toLocaleLowerCase()
    if (inventoryChoice === "cocaine") {
        inventory.health += 10
        inventory.cocaine -= 1
        return ("Your health is now " + inventory.health)
    } else {
        return ''
    }
    
}

function walk() {
    var randomAttack = Math.floor(Math.random() * 4) + 1 
    console.log(randomAttack)
    if (randomAttack === 4) { //change to 4
        var enemyType
        var whichEnemy = Math.floor(Math.random() * 3) + 1
        switch (whichEnemy) {
            case 1:
                enemyType = "BOYFRIEND"
                break;
            case 2:
                enemyType = "PIMP"
                break;
            case 3:
                enemyType = "COP"
                break;
        }
    } else {
        var prostituteNames = ["Lola", "Ginger", "Candy", "Charity", "Cherry", "Kitty", "Chastity", "Bambi", "Star", "Diamond", "Chardonnay", "Candice", "Starburst", "Skittles"]
        var prostituteName = prostituteNames[Math.floor(Math.random() * prostituteNames.length)]
        console.log("Nice! You made it to " + prostituteName + "'s house.")
        return (prostitute(prostituteName))
    }

    console.log("Fuck! It's a " + enemyType + " coming to collect")
    return(fightOrFlight(enemyType))
}

function fightOrFlight() {
    var fightOrFlightChoice = ask.question("\nAlright, " + name + " will you fight or run?\n")

    fightOrFlightChoice = fightOrFlightChoice.toLowerCase()

    if (fightOrFlightChoice === "fight") {
        return(fight())
    } else if (fightOrFlightChoice === "run") {
        var runSuccess = Math.floor(Math.random() * 2) + 1
        if (runSuccess === 1) {
            return("\nWhew, that was a close one.\n")
            return ''
        } else {
            console.log("\nOh, no! You couldn't run fast enough\n")
            return(fight())
        }
    }
}

function prostitute(prostituteName) {
    var prostituteCost = Math.floor(Math.random() * 10) + 1
    do {
        var prostituteOptions = ask.question(prostituteName + " wants $" + prostituteCost + " to continue.\nContinue with " + prostituteName + " or walk?\nContinue\nWalk\nInventory\n")
        prostituteOptions = prostituteOptions.toLowerCase()
        if (prostituteOptions === "walk") {
            walk()
        } else if (prostituteOptions === "continue") {
            if (inventory.money < prostituteCost) {
                var damage = Math.floor(Math.random() * 20) + 10
                inventory.health -= damage
                return ("You slimy motherfucker! This shit ain't free!\n " + prostituteName + " stabs you for " + damage + " damage\n")
            } else if (inventory.condoms < 1) {
                var damage = Math.floor(Math.random() * 20) + 10
                inventory.health -= damage;
                return ("Oh-no! You didn't use a condom. You've recieved an STD for " + damage + " damage.")
            } else {
                inventory.prostitutes++
                inventory.money -= prostituteCost
                inventory.condoms -= 1
                return ("Nice work! You got mad rep in the redlight zone")
            }
        } else if (prostituteOptions === "inventory") {
            console.log(print(name, inventory))
        }
    }
    while (prostituteOptions === 'inventory');
}



function fight() {
    enemyHealth = 100;
    var notDead = true
    while (true) {
        do {
        // if (inventory.health <= 0) {
        //     notDead = false;
        // }
        var playerAttack = Math.floor(Math.random() * 100) + 1
        console.log("\nYou hit the motherfucker for " + playerAttack + " damage.\n")
        enemyHealth -= playerAttack
        if (enemyHealth <= 0) {
            notDead = false;
            var randomEarned = ["condom", "cocaine", "money"]
            var earned = randomEarned[ Math.floor(Math.random() * 3)]
            if (earned === "condom") {
                var condom = Math.floor(Math.random() * 3) + 1
                inventory.condoms = inventory.condoms + condom
                return ("\nYou killed the motherfucker!\nYou earned " + condom + " " + earned)
                // break;
                // return ''
            } else if (earned === "cocaine") {
                var cocaine = Math.floor(Math.random() * 2) + 1
                inventory.cocaine = inventory.cocaine + cocaine
                return("\nYou killed the motherfucker!\nYou earned " + cocaine + " " + earned)
                // break;
                // return ''
            } else if (earned === "money") {
                var money = Math.floor(Math.random() * 10) + 1
                inventory.money = inventory.money + money
               return ("\nYou killed the motherfucker!\nYou earned $" + money)
                // break;
                // return ''
            }
        }
        if(enemyHealth > 0){
        var enemyAttack = Math.floor(Math.random() * 100) + 1
        console.log("\nThat motherfucker hit back for " + enemyAttack + " damage.\n")
        inventory.health -= enemyAttack
        if (inventory.health < 0) {
            notDead = false;
            return("\nThat motherfucker killed you!\n")
            // return ''
        }
        }
    // }
    if(enemyHealth > 0 && inventory.health > 0){
        var optionChoice = ask.question("\nAttack again \nRun \nInventory\n")
    }
        if (optionChoice === "inventory") {
            console.log(print(name, inventory));
        }
    }
    while(optionChoice === "inventory")
}
// return ''
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
var notDead = true;
// var health = 100;

var inventory = {
    health:100,
    money: 5,
    cocaine: 1,
    condoms: 1,
    prostitutes: 0
};
console.log("\n" + name + ", ready to hit up the street corners?\n")
while (notDead) {
    if (inventory.health <= 0) {
        console.log("\nThat motherfucker killed you!\n")
        if(inventory.prostitutes <= 5){
            console.log("And you only got lucky " + inventory.prostitutes + " times...ouch.")
        } else if(inventory.prostitutes <= 10){
            console.log("You got lucky " + inventory.prostitutes + " times. That's alright for a newb.")
        } else if(inventory.prostitutes > 10){
            console.log("You got lucky " + inventory.prostitutes + " times! Pretty slick.that")
        }
        break;
    }
    var optionChoice = ask.question("\nPress 'W' to walk to the next corner or  'inventory' to show your stats and health\n")

    optionChoice = optionChoice.toLowerCase()

    if (optionChoice === "inventory") {
        console.log(print(name, inventory));
    } else if (optionChoice === 'w') {
        console.log(walk())
    }
}
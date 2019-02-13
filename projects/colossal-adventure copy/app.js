function quit(){
    return ""
    
}

//  SLEEP
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }


//  INVENTORY

function print(name, inventory) {
    var inventoryChoice = ask.question("\nPlayer Name: " + name + "\nPlayer health: " + inventory.health + "\n\nInventory: \n     [ C ] Cocaine: " + inventory.cocaine + "\n           Money: " + inventory.money + "\n           Condoms: " + inventory.condoms + "\n           Prostitutes: " + inventory.prostitutes + "\n     [ E ] Exit inventory\n")
    
    inventoryChoice = inventoryChoice.toLocaleLowerCase()
    if (inventoryChoice === "c") {
        inventory.health += 10
        inventory.cocaine -= 1
        return ("\nYour health is now " + inventory.health)
    } else {
        return ''
    }

}

//  WALK -- Attacked or not

function walk() {
    console.clear()
    console.log(`
        O
       -|-
       / \\
    `)
    sleep(500);
    console.clear()
    console.log(`
            O
           -|-
           / \\
    `)
    sleep(500);
    console.clear()
    console.log(`
                O
               -|-
               / \\
    `)
    sleep(500);
    console.clear()
    console.log(`
                    O
                   -|-
                   / \\
    `)
    sleep(500);
    console.clear()
    console.log(`
                         O
                        -|-
                        / \\
    `)
    sleep(500);
    console.clear()
    console.log(`
                             O
                            -|-
                            / \\
    `)
    sleep(500);
    console.clear()
    console.log(`
                                 O
                                -|-
                                / \\
    `)
     sleep(500);
     console.clear()
    console.log(`
                                     O
                                    -|-
                                    / \\
    `)

    var randomAttack = Math.floor(Math.random() * 2) + 1
    if (randomAttack === 1) { //change to 4
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
        console.log("\nNice! You made it to " + prostituteName + "'s house.\n")
        sleep(1000);
        return (prostitute(prostituteName))
    }

    console.log("\nFuck! It's a " + enemyType + " coming to collect")
    return (fightOrFlight(enemyType))
}

//  If not attacked -- PROSTITUTES

function prostitute(prostituteName) {
    var prostituteCost = Math.floor(Math.random() * 10) + 1
    do {
        console.log(prostituteName + " wants $" + prostituteCost + " to continue.\n")
        sleep(1000);
        console.log("Continue with " + prostituteName + " or walk away?\n")
        sleep(1000);
        var prostituteOptions = ask.question(`
     _________________
    | [ C ] Continue  |
    | [ W ] Walk      |
    | [ I ] Inventory |
    | [ Q ] Quit      |
     _________________\n\n`)
        prostituteOptions = prostituteOptions.toLowerCase()
        if (prostituteOptions === "w") {
            walk()
        } else if (prostituteOptions === "c") {
            if (inventory.money < prostituteCost) {
                var damage = Math.floor(Math.random() * 20) + 10
                inventory.health -= damage
                sleep(1000);
                return ("\nYou slimy motherfucker! This shit ain't free!\n " + prostituteName + " stabs you for " + damage + " damage\n")
            } else if (inventory.condoms < 1) {
                var damage = Math.floor(Math.random() * 20) + 10
                inventory.health -= damage;
                sleep(1000);
                return ("\nOh-no! You didn't use a condom. You've recieved an STD for " + damage + " damage.")
            } else {
                inventory.prostitutes++
                inventory.money -= prostituteCost
                inventory.condoms -= 1
                sleep(1000);
                return ("\nNice work! You got mad rep in the redlight zone")
            }
        } else if (prostituteOptions === "i") {
            console.log(print(name, inventory))
        } else if (prostituteOptions === "q"){
            quit()
        }
    }
    while (prostituteOptions === 'i');
}
//  If attacked --- RUN or FIGHT

function fightOrFlight() {
    console.log("\nAlright, " + name + " will you fight or run?\n")
    var fightOrFlightChoice = ask.question(`
     _________________
    | [ A ] Fight     |
    | [ W ] Run       |
    | [ I ] Inventory |
    | [ Q ] Quit      |
     ________________\n\n`)

    fightOrFlightChoice = fightOrFlightChoice.toLowerCase()

    if (fightOrFlightChoice === "a") {
        return (fight())
    } else if (fightOrFlightChoice === "w") {
        var runSuccess = Math.floor(Math.random() * 2) + 1
        if (runSuccess === 1) {
            return ("\nWhew, that was a close one.\n")
            return ''
        } else {
            console.log("\nOh, no! You couldn't run fast enough\n")
            return (fight())
        }
    }
}

// If FIGHT

function fight() {
    enemyHealth = 100;
    var notDead = true
    while (true) {
        // do {

            var playerAttack = Math.floor(Math.random() * 100) + 1
            console.log("\nYou hit the motherfucker for " + playerAttack + " damage.\n")
            sleep(1000);
            enemyHealth -= playerAttack
            if (enemyHealth <= 0) {
                var randomEarned = ["condom", "cocaine", "money"]
                var earned = randomEarned[Math.floor(Math.random() * 3)]
                if (earned === "condom") {
                    var condom = Math.floor(Math.random() * 3) + 1
                    inventory.condoms = inventory.condoms + condom
                    console.log ("\nYou killed the motherfucker!\nYou earned " + condom + " " + earned)
                    return quit()
                } else if (earned === "cocaine") {
                    var cocaine = Math.floor(Math.random() * 2) + 1
                    inventory.cocaine = inventory.cocaine + cocaine
                    console.log ("\nYou killed the motherfucker!\nYou earned " + cocaine + " " + earned)
                    return quit()
                } else if (earned === "money") {
                    var money = Math.floor(Math.random() * 10) + 1
                    inventory.money = inventory.money + money
                    console.log ("\nYou killed the motherfucker!\nYou earned $" + money)
                    return quit()
                }
        
            }
            // if(enemyHealth < 0 || inventory.health < 0){
            //     break;
            // }
            if (enemyHealth > 0) {
                var enemyAttack = Math.floor(Math.random() * 100) + 1
                console.log("\nThat motherfucker hit back for " + enemyAttack + " damage.\n")
                sleep(1000);
                inventory.health -= enemyAttack
                if (inventory.health < 0) {
                    console.log ("\nThat motherfucker killed you!\n")
                    return quit()
                }
            }
            if (enemyHealth > 0 && inventory.health > 0) {
                var optionChoice = ask.question(`
     _________________
    | [ A ] Attack    |
    | [ W ] Run       |
    | [ I ] Inventory |
    | [ Q ] Quit      |
     _________________\n\n`)
            }
            if (optionChoice === "i") {
                console.log(print(name, inventory));
            }
        // }
        // while (optionChoice === "i")
    }
}

// MAIN

console.log(`
 /$$      /$$             /$$     /$$                                 /$$$$$$$$                  /$$                                    
| $$$    /$$$            | $$    | $$                                | $$_____/                 | $$                                    
| $$$$  /$$$$  /$$$$$$  /$$$$$$  | $$$$$$$   /$$$$$$   /$$$$$$       | $$    /$$   /$$  /$$$$$$$| $$   /$$  /$$$$$$   /$$$$$$   /$$$$$$$
| $$ $$/$$ $$ /$$__  $$|_  $$_/  | $$__  $$ /$$__  $$ /$$__  $$      | $$$$$| $$  | $$ /$$_____/| $$  /$$/ /$$__  $$ /$$__  $$ /$$_____/
| $$  $$$| $$| $$  \\ $$  | $$    | $$  \\ $$| $$$$$$$$| $$  \\__/      | $$__/| $$  | $$| $$      | $$$$$$/ | $$$$$$$$| $$  \\__/|  $$$$$$ 
| $$\\  $ | $$| $$  | $$  | $$ /$$| $$  | $$| $$_____/| $$            | $$   | $$  | $$| $$      | $$_  $$ | $$_____/| $$       \\____  $$
| $$ \\/  | $$|  $$$$$$/  |  $$$$/| $$  | $$|  $$$$$$$| $$            | $$   |  $$$$$$/|  $$$$$$$| $$ \\  $$|  $$$$$$$| $$       /$$$$$$$/
|__/     |__/ \\______/    \\___/  |__/  |__/ \\_______/|__/            |__/    \\______/  \\_______/|__/  \\__/ \\_______/|__/      |_______/                                                                                                                                   
`)

var ask = require("readline-sync")

console.log(`Welcome to the game 'Motherfuckers.' The objective is to not die and hit up as many corners as you can.\n`)
sleep(1000);

var name = ask.question(`Enter name to play\n\n`)
var notDead = true;

var inventory = {
    health: 100,
    money: 5,
    cocaine: 1,
    condoms: 1,
    prostitutes: 0
};

console.log("\n" + name + ", ready to hit up the street corners?\n")
while (notDead) {
    if (inventory.health <= 0) {
        if (inventory.prostitutes <= 5) {
            console.log("\n You only got lucky " + inventory.prostitutes + " times...ouch.")
        } else if (inventory.prostitutes <= 10) {
            console.log("\nYou got lucky " + inventory.prostitutes + " times. That's alright for a newb.")
        } else if (inventory.prostitutes > 10) {
            console.log("\nYou got lucky " + inventory.prostitutes + " times! Pretty slick.that")
        }
        break;
    }
    console.log("\nPress 'W' to walk to the next corner or  'inventory' to show your stats and health\n")
    var optionChoice = ask.question(`
     _________________
    | [ W ] Walk      |
    | [ I ] Inventory |
    | [ Q ] Quit      |
     _________________\n\n`)

    optionChoice = optionChoice.toLowerCase()

    if (optionChoice === "i") {
        console.log(print(name, inventory));
    } else if (optionChoice === 'w') {
        console.log(walk())
    }
}


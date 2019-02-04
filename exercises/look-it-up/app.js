function addWord(dictionary){
    // var word = (readline.question("\nEnter word: ").toLowerCase)
    if(dictionary.hasOwnProperty((readline.question("\nEnter word: ").toLowerCase)) === true ){
        return(console.log("Already defined"))
    } else
    dictionary[word] = readline.question("\nEnter definition: ");
    return dictionary;
}

function lookUpWord(dictionary){
    return dictionary[(readline.question("\nEnter word: ").toLowerCase)]
}

var readline = require('readline-sync')
var dictionary = {}

while (true) {

    var option = readline.question("\nInsert a word and its definition - 1 \nLook up an existing word's definition - 2 \nQuit - 3\n")

    option = parseInt(option)

    if (option === 1) {
        addWord(dictionary)
    } else if (option === 2){
        console.log(lookUpWord(dictionary))
    } else if (option === 3){
        break;
    }
}
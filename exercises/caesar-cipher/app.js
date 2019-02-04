function caesarCipher(input, shift){
    var encryption = ''
    input = input.toLowerCase()

    for(var i = 0; i < input.length; i++){
        if(input[i] >= 'a' && input[i] <= 'z'){
            encryption += String.fromCharCode((input[i].charCodeAt() + shift - 97) % 26 + 97)
    } else {
        encryption += input[i]
    }
}
    return encryption
}

var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

console.log(caesarCipher(input, shift))

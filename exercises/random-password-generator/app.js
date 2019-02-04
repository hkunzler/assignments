function random(number, str){
    randomPasswordGenerator(number, str);
}
function randomPasswordGenerator(number, str) {
    var array = []
    var ascii;
    var low = 33;
    var high = 126;
    for(var i = 0; i < number; i++){
        ascii = Math.floor(Math.random() * (high - low) + low)
        array.push(String.fromCharCode(ascii))
    for(var  i = 0; i < str.length; i++){
        if(array.indexOf(str[i] === -1)){
            random(number, str);
        } 
    }
}
    return array.join('')
}
console.log(randomPasswordGenerator(10, "hello"))

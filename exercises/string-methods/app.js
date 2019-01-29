function capilizeAndLowercase(stringVar) {
    console.log(stringVar.toUpperCase() + stringVar.toLowerCase())
}

capilizeAndLowercase("Hello") // => "HELLOhello"

function findMiddleIndex(stringVar) {
    if (stringVar.length % 2 === 0) {
        console.log(stringVar.length / 2)
    } else {
        console.log(Math.floor(stringVar.length / 2))
    }
}

findMiddleIndex("Hello") // => 2
findMiddleIndex("Hello World") // => 5

function returnFirstHalf(stringVar) {
    console.log(stringVar.slice(0, stringVar.length / 2))
}

returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"

function capilizeAndLowercase(stringVar) {
    if (stringVar.length % 2 === 0) {
        console.log(stringVar.slice(0, stringVar.length / 2).toUpperCase().concat(stringVar.slice(stringVar.length / 2, stringVar.length).toLowerCase()))
    } else {
        console.log(stringVar.slice(0, Math.floor(stringVar.length / 2)).toUpperCase() + stringVar.slice(stringVar.length / 2, stringVar.length).toLowerCase())
    }
}

capilizeAndLowercase("Hello") // => "HEllo"
capilizeAndLowercase("Hello World") // => "HELLO world"

function capitalize(stringVar){
    stringVar = stringVar.split(" ");
    for(var i = 0; i < stringVar.length; i++){
        stringVar[i] = stringVar[i].charAt(0).toUpperCase() + stringVar[i].slice(1);
    }
    console.log(stringVar.join(' '));
}

capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

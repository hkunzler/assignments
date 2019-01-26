if (typeof "dog" === "string"){
    console.log("true")
}

if(typeof "true" === 'boolean' ){
    console.log("boolean")
} else  {
    console.log("not boolean")
}

if(typeof randomVariable === 'undefined'){
    console.log("undefined")
} else {
    console.log("defined")
}

var number = 91;
var letter = 's';
if (letter > number){
    console.log(true)
} else {
    console.log(false)
}

var num = 10;
num % 2 === 0 ? console.log("the number is even") : console.log("the number is odd")

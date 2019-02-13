function Animal(type, legs){
    this.type = type;
    this.legs = legs;
    this.speak = function(){
        return("moo")
    }
}

var giraffe = new Animal("mammal", 4)
var duck = new Animal("mammal", 2)
console.log(giraffe.legs)
console.log(duck.legs)

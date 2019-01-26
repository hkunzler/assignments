var myArray = [];
for( var i = 0; i < 10; i++){
    myArray.push(i);
}
console.log(myArray);

var myArray = [];
for( var i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for( var i = 0; i <= fruit.length; i++){
    if(i % 2 !== 0){
        console.log(fruit[i])
    }
}
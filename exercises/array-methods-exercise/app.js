function fruitAndvegetables(fruit, vegetables) {
    var indexOrange;
    var food;
    vegetables.pop();
    fruit.shift();
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

    for (var i = 0; i < fruit.length; i++) {
        if (fruit[i] === "orange") {
            indexOrange = i;
        }
    }
    fruit.push(indexOrange);
    vegetables.push(vegetables.length);
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

    food = fruit.concat(vegetables);
    console.log(food);

    food.splice(4, 2);
    console.log(food);

    food.reverse();
    console.log(food);

    return typeOffood.join()
}


var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log(fruitAndvegetables(fruit, vegetables))
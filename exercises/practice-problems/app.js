let reverseStr = function(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStr("Hello World"))

let isNum = function(str) {
    str >= 0 || str <= 9 ? console.log(true) : console.log(false);
}

isNum("11")

let isEven = function(num) {
  num % 2 === 0 ? console.log(true) : console.log(false)
}

isEven(3)

let averageArray = function(arr) {
    var sum = 0;
   for(var i = 0; i < arr.length; i++){
       sum += arr[i]
   }
   
   return sum / arr.length
}

console.log(averageArray([5, -10, 10, 20]))

let combineArrays = function(arr1, arr2) {
    var newArray = []
    for(var i = 0; i < arr1.length; i++){
        newArray.push(arr1[i], arr2[i])
    }
    return newArray
}

console.log(combineArrays(["a", "b", "c"], [1, 2, 3]))

function largest(arr){
    var largestNum = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > arr[i-1]){
            largestNum = arr[i]
        }
    }
    return largestNum
}

console.log(largest([3, 5, 2, 8, 1]))

function lettersWithStrings(arr, char){
    var newArray = []
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i][j] === char){
                newArray.push(arr[i])
            }
        }
    }
    return newArray
}
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) // => ["C%4!", "Hey!"])

function isDivisible(num1, num2){
    if(num1 % num2 === 0){
        return true
    } else{
        return false
    }
}

console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false
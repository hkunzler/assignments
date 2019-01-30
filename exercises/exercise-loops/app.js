function stringArray(str){
    var newArray = []
    for(var i = 0; i < str.length; i++){
        newArray.push(str[i])
    }
    return newArray
}

console.log(stringArray("Hello, World"))

function letterSearch(str, letter){
    for(var i = 0; i < str.length; i++){
        if(str[i] === letter){
            return i
        }
    }
    return "Character not found!"
}

console.log(letterSearch("Hello", "h"))

function numberSearch(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 42){
            return "Found 42!"
        }
    }
    return "42 not found!"
}

console.log(numberSearch([1, 2, 7, 4]))

function smallestNumber(arr){
    var smallest = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest
}

console.log(smallestNumber([1, -2, 0, 4]))

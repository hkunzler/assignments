function combined(arr) {
    let largest = 0;
    let largestStr = [];
    // Find the 3 adjacent elements with longest combined length
    for (let i = 0; i < arr.length; i++){
        if(arr[i+2] !== undefined){
            if (arr[i].length + arr[i + 1].length + arr[i + 2].length > largest) {
                largest = arr[i].length + arr[i + 1].length + arr[i + 2].length 
                largestStr = [];
                largestStr.push(arr[i], arr[i+1], arr[i+2])
            }
        }
    }
return largestStr
}

console.log(combined(["this", "is", "an", "array"]))
// Output:  ["is", "an", "array"]
    // they have the longest combined length of any 3 adjacent elements. (9 characters)
    // In contract, ["this", "is", "an"] only has a combined length of 8 characters
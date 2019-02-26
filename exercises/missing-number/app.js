const missingNumber = arr => {
    for (let i = 0; i < arr.length; i++){
        arr = arr.sort((a, b) => a - b);
        // console.log(arr);
        if (arr.length >= 3) {
            if (arr[i] + 1 != arr[i + 1])
                // console.log(arr[i]);
                return arr[i] + 1
        }
    }
    return -1
}

console.log(missingNumber([2, 1, 3, 5]))
console.log(missingNumber([12, 10, 9]))
console.log(missingNumber([-3, 0, -2, 3, 2, -1]))

function noDuplicates(phrase){
    var newArray = [];
    for(var i = 0; i < phrase.length; i++){
        if( newArray.indexOf(phrase[i]) == -1){
            newArray.push(phrase[i])
        }
    }
    console.log(newArray.join(''))
}

noDuplicates("bookkeeper larry");


// var newArray = [];
// var newSubArray = [];

// for(var i = 0; i < 3; i++){
//     newArray.push(newSubArray)
//     // newArray.push("\n")
//         for(var j = 0; j < 1; j++){
//             newSubArray.push(i);
//         }
// }
// console.log(newArray)

// var newArray = [];
// var index = 0;

// for(var i = 0; i < 3; i++){
//     var newSubArray = [];
//     newArray.push(newSubArray)
//         for(var j = 0; j < 3; j++){
//             newSubArray.push(index);
//         }
//             index++;
// }
// console.log(newArray)
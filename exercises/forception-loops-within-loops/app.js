function forception(arr1, arr2){
    var newArray = [];
    for(var i = 0; i < arr1.length; i++){
        newArray.push(arr1[i]+":")
        for(var j = 0; j < arr2.length; j++){
            newArray.push(arr2[j])
        }
    }
    return newArray
}
console.log(forception(["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"], "abcdefghijklmnopqrstuvwxyz"))
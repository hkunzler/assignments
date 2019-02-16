function countCode(string) {
    let counter = 0;
    for (var i = 0; i < string.length; i++){
        if (string[i] + string[i + 1] + string[i + 3] === "coe") {
            counter++
        }
    }
    console.log(counter)
}

//Output: 
countCode("aaacodebbb") //returns 1
countCode("codexxcode") // returns 2
countCode("cozexxcope") //returns 2
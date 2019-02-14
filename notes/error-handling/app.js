//Error Handling with JS

//throw

// throw new Error("This is my personal error message")

//catch
var num = 10

//Try the following code
try{
    if(num < 10){
        throw new Error("THe number is less than 10")
    } else if (num >=10){
        throw new Error("The number is greater or equal to 10")
    }
}

//Show the error if one occurred
catch(error){
    console.log(error)
}
finally {
    console.log("I'm running no matter what")
}
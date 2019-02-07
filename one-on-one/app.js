function charCount(str1, str2){
    var counter = 0;
    for(var i = 0; i<str2.length; i++){
        if(str1 === str2[i]){
            counter++
        }
    }
    return counter
}




// Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.

function charCount(myChar, str) {
    // Your code here
  }
  
  console.log(charCount(“a”, “edabit”)) // 1
  console.log(charCount(“c”, “Chamber of secrets”)) // 1
  console.log(charCount(“f”, “frank and his friends have offered five foxes for sale”)) // 7
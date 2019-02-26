function isPalindrome(phrase) {
    if (phrase.split('').reverse().join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()? ]/g, "").toLowerCase() === phrase.split('').join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()? ]/g, "").toLowerCase()) {
        return(true);
    }
    return(false);
}



console.log(isPalindrome("Star Rats!"));  // true
console.log(isPalindrome("palindrome"));  // false
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true
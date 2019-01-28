function twoWords(word1, word2){
    console.log(word1.toLowerCase().concat(word2.toUpperCase()))
}

twoWords("Hello", "World")

function splitWord(word1){
    console.log(word1.split('').slice(0, 3))
}

splitWord("Hello")

function heyWorld(word1){
    console.log("The o's are " + (word1.lastIndexOf('o') - word1.indexOf("o") - 2) + " characters apart")
}

heyWorld("Hello World")

function heyWorld(word){
    console.log(word.replace(word.match("llo"), "y").substr(0, 3))
}

heyWorld("Hello World")


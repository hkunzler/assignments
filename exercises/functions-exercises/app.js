function sumOfTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

sumOfTwoNumbers(5, 2)

function largestOfThreeNumbers(number1, number2, number3){
  if(number1 > number2 && number1 > number3){
      console.log(number1)
  } else if(number2 > number1 && number2 > number3){
        console.log(number2)
    } else {
        console.log(number3)
    }
}

largestOfThreeNumbers(1, 5, 3)

function evenOrOdd(number){
    if(number % 2 === 0){
        console.log("even")
    } else {
        console.log("odd")
    }
}

evenOrOdd(8)

function stringLength(stringInput){
    if(stringInput.length <= 20){
        console.log(stringInput.concat(stringInput))
    } else {
        console.log(stringInput.substr(0, stringInput.length / 2))
    }
}

stringLength("HelloHowAreYou?That'sSwell")


function fibonacci(number){
    var sum = 0;
    var arrayItem;
    var fibonacciArray = [];
    fibonacciArray[0] = 1;
    fibonacciArray[1] = 1;
    for(var i = 2; i < number; i++){
        arrayItem = fibonacciArray[i - 2] + fibonacciArray[i - 1]
        fibonacciArray.push(arrayItem);
        sum += arrayItem;
        
    }
    console.log(fibonacciArray + "\n" + (sum + 2));
}

fibonacci(10);

function mostFrequentCharacter(string){
    stringArray = string.split('');
    var counter;
    var mostFrequent = 0;
    var letter;
    for(var i = 0; i < stringArray.length; i++){
        counter = 0;
        for(var j = 1; j < stringArray.length; j++)
            if(stringArray[i] === stringArray[j]){
                counter++;
                if(counter > mostFrequent){
                    mostFrequent = counter;
                    letter = stringArray[i];
                }
            }
        
        }
    console.log(letter)
    }

mostFrequentCharacter("hellooo")

// var myArray = [];
// var subArray = [];
// for (var i = 0; i < 6; i++){
//     myArray.push(subArray)
//     for(var j = 0; i < 3; i++){
//         subArray.push("0")
//     }
// }
// console.log(myArray)
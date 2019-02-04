var calculator = document.calculator;
var calculatorContainer = document.getElementById('calculator-container')
var sumAnswer = document.getElementById('sumAnswer')
var subtractionAnswer = document.getElementById('subtractionAnswer')
var multiplyAnswer = document.getElementById('multiplyAnswer')

document.body.style.backgroundColor = "#7babf7";
document.body.style.margin = "5% 30%";
document.getElementById("center").style.textAlign = "center";
document.getElementById("center").style.backgroundColor = "#3869b7";
document.getElementById("center").style.width = "100%";
document.getElementById("center").style.margin = "0";
document.getElementById("calculator").style.backgroundColor = "#3d7ee5"
document.getElementById("margin").style.padding = "10% 20% 40% 20%";

calculator.addEventListener('click', function (e) {
    e.preventDefault()
    calculatorContainer.innerHTML = ''
    target = e.target
    if (target.id === 'add') {
        var sum = parseInt(calculator.add1.value) + parseInt(calculator.add2.value)
        calculator.add1.value = ''
        calculator.add2.value = ''
        var pSum = document.createElement('p')
        pSum.textContent = sum
        sumAnswer.appendChild(pSum)
    } else if (target.id === 'subtract') {
        var subtract = parseInt(calculator.subtract1.value) - parseInt(calculator.subtract2.value)
        calculator.subtract1.value = ''
        calculator.subtract2.value = ''
        var pSubtract = document.createElement('p')
        pSubtract.textContent = subtract
        subtractionAnswer.appendChild(pSubtract)
    } else if (target.id === 'multiply') {
        var multiply = parseInt(calculator.multiply1.value) * parseInt(calculator.multiply2.value)
        calculator.multiply1.value = ''
        calculator.multiply2.value = ''
        var pMultiply = document.createElement('p')
        pMultiply.textContent = multiply
        multiplyAnswer.appendChild(pMultiply)
    }
})
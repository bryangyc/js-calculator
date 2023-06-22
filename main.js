// console.log('Hello World')

// The main functions for the calculator
let sum = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

// Create a function called operator that has 3 parameters, a number, an operator and a number. Create variables for each of the parts of the calculation

// Get the values from the button pressed
const number = document.querySelectorAll('.button > .number');
const operators = document.querySelectorAll('.button > .operator');
const clear = document.querySelector('.button > .clear');
const output = document.querySelector('.calculator > .textOutput');

let displayValue = "0";
output.textContent = displayValue;

let firstNum = "";
let secondNum = "";
let operator = "";


number.forEach(num => {
    num.addEventListener('click', (e) => {
        if (operator === "") { // Read the first number
            firstNum += e.target.value;
            // console.log(firstNum);
            displayValue = firstNum;
            output.textContent = displayValue;

        } else {
            secondNum += e.target.value;
            // console.log(secondNum);
            displayValue += secondNum;
            output.textContent = displayValue;
        }
    })
});

operators.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.value !== "=") {
            operator = e.target.value;
            displayValue += operator
            output.textContent = displayValue;
            // console.log(firstNum);
            // console.log(operator);
        } else {
            // console.log(secondNum);
            displayValue = operate(firstNum, operator, secondNum);
            output.textContent = displayValue;
        }
        // console.log(operator);

    })
})

// output.value = displayValue;

// Add the clear button
clear.addEventListener('click', (e) => {
    // document.querySelector('.calculator > .textOutput').innerHTML = "";
    // Reset
    firstNum = "";
    secondNum = "";
    operator = ""
    displayValue = "0";
    output.textContent = displayValue;
})

// The main operation
function operate(a, b, c) {
    a = Number(a)
    // b = Number(b)
    c = Number(c)

    switch (b) {
        case "+":
            return sum(a, c);
        case "-":
            return subtract(a, c);
        case "*":
            return multiply(a, c);
        case "/":
            return divide(a, c)
    }
}

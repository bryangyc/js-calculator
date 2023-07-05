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
const decimal = document.querySelector('#decimal');

let displayValue = "0";
output.textContent = displayValue;

let firstNum = "";
let secondNum = "";
let operator = "";
let temp = "";


number.forEach(num => {
    num.addEventListener('click', (e) => {
        if (operator === "") { // Read the first number
            firstNum += e.target.value;
            output.textContent = firstNum;
        } else {
            secondNum += e.target.value;
            output.textContent = secondNum;
        }
        if (e.target.value === '.') {
            decimal.disabled = true;
        }
    })
});

operators.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.value !== "=") {
            if (secondNum !== "") {
                firstNum = operate(firstNum, operator, secondNum);
                output.textContent = firstNum;
                secondNum = "";
            }
            operator = e.target.value;
            decimal.disabled = false;
        } else {
            displayValue = operate(firstNum, operator, secondNum);
            if (displayValue === NaN || displayValue === Infinity) {
                output.textContent = "INVALID"
            } else {
                output.textContent = Math.round(displayValue * 100) / 100;
            }
        }

    })
})

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

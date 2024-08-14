function add(a, b) {
    return `${a + b}`;
}

function subtract(a, b) {
    return `${a - b}`;
}

function multiply(a, b) {
    return `${a * b}`;
}

function divide(a, b) {
    return `${a / b}`;
}

let firstNum;
let operator;
let secondNum;

function operate(firstNum, operator, secondNum) {
    switch(operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "x":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
    }
}

const numsBox = document.querySelector(".nums");

const oneDiv = document.createElement("div");
const twoDiv = document.createElement("div");
const threeDiv = document.createElement("div");
const fourDiv = document.createElement("div");

const display = document.querySelector('.display');

for (let i = 0; i < 10; i++) {
    const numBtn = document.createElement("BUTTON");
    numBtn.textContent = `${i}`;
    numBtn.addEventListener('click', () => {
        display.textContent += `${i}`;
    })

    if (i === 0) {
        fourDiv.appendChild(numBtn);
    }
    if (i === 1 || i === 2 || i === 3) {
        threeDiv.appendChild(numBtn);
    }
    if (i === 4 || i === 5 || i === 6) {
        twoDiv.appendChild(numBtn);
    }
    if (i === 7 || i === 8 || i === 9) {
        oneDiv.appendChild(numBtn);
    }
}

numsBox.appendChild(oneDiv);
numsBox.appendChild(twoDiv);
numsBox.appendChild(threeDiv);
numsBox.appendChild(fourDiv);

const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener('click', () => {
    display.textContent = "";
})


const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener('click', () => {
    display.textContent += " + "
})

const subtractBtn = document.querySelector(".subtractBtn");
subtractBtn.addEventListener('click', () => {
    display.textContent += " - "
})

const multiplyBtn = document.querySelector(".multiplyBtn");
multiplyBtn.addEventListener('click', () => {
    display.textContent += " x "
})

const divideBtn = document.querySelector(".divideBtn");
divideBtn.addEventListener('click', () => {
    display.textContent += " / "
})

const equalsBtn = document.querySelector(".equalsBtn");
equalsBtn.addEventListener('click', () => {
    let displayVal = display.textContent;
    for (let i = 0; i < displayVal.length; i++) {
        if (isNaN(displayVal[i])) {
            if (displayVal[i] !== " ") {
                operator = displayVal[i];
                firstNum = parseInt(displayVal.slice(0, i - 1));
                secondNum = parseInt(displayVal.slice(i + 1));
            }
        }
    }
    display.textContent = operate(firstNum, operator, secondNum)
})
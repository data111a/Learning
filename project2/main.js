var firstNum = document.getElementById('firstNum').textContent = 8
var secondNum = document.getElementById('secondNum').textContent = 12
let sum = document.getElementById('Sum')

function multiply() {
    console.log(firstNum * secondNum)
    sum.textContent ='Sum : ' + (firstNum * secondNum)
}

function plus() {
    console.log(firstNum + secondNum)
    sum.textContent ='Sum : ' + (firstNum + secondNum)
}

function subtract(){
    console.log(firstNum - secondNum)
    sum.textContent ='Sum : ' + (firstNum - secondNum)
}


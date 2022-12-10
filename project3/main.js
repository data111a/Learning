let cards = document.getElementById('cards')
let summ = document.getElementById('sum')
let message = document.getElementById('message')
let balance = document.getElementById('balance')
let wonBlackJack = false
let blackJackCount = 0
let isAlive = true
let money = 100
let tries = 0
let newTries = 0
let rollPrice = 1.5
let addPrice = 0.5
let cardsArr = []
let firstCard = 0
let secondCard = 0
let sum = 0
let thirdCard = 0
let newCard_ = false

balance.textContent = "your balance : " + money + "$$$"


function choseCards() {
    firstCard = Math.floor(Math.random() * 10) + 2
    secondCard = Math.floor(Math.random() * 10) + 2
    cardsArr[0] = firstCard
    cardsArr[1] = secondCard
}

function play() {
    if (newCard_){
        PlayByRules()
        newCard_ = false
        newTries = 1
    }
    else{
        newTries = 0
        tries += 1
        thirdCard = 0
        newCard_ = false
        cardsArr.pop(2)
        choseCards()
        PlayByRules()
    }
}


function PlayByRules(){
    if (money >= rollPrice) {
        console.log(firstCard)
        console.log(secondCard)
        console.log(thirdCard)
        sum = firstCard + secondCard + thirdCard
        summ.textContent = "Sum : " + sum
        for (let i = 0; i < cardsArr.length; i++) {
            if (i != 0) {
                cards.textContent += ' and ' + cardsArr[i]
            }else{
                cards.textContent = "Cards : " + cardsArr[i] 
            }
        }
        if (sum < 21) {
            if(newCard_){
                message.textContent = "You scored nothing, want to play again? - " + addPrice
            }else {
                wonBlackJack = false
                console.log('do you want to draw new cards? you scored nothing')
                money -= rollPrice
                balance.textContent = "your balance : " + money + "$$$"
                message.textContent = "You scored nothing, want to play again? - " + rollPrice
        }
        }else if (sum === 21){
            console.log('you won she dedamotynulo')
            blackJackCount += 1
            wonBlackJack = true
            let wonMoney = blackJackCount * 100
            money += (100 * rollPrice)
            balance.textContent = "your balance : " + money + "$$$"
            if (blackJackCount > 1) {
                message.textContent = "You wonn againn!!!! total win : "+ wonMoney + '$'
            }else {
                message.textContent = "You wonn +100$ "
            }
        } else {
            wonBlackJack = false
            console.log('you lost game :( ')
            isAlive = false
            if (money > 100) {
                money -= 100
                message.textContent = "You lost :( || -100$"
            }else {
                money = 0
            }
            balance.textContent = "your balance : " + money + "$$$"
            message.textContent = "You lost :( "
        }
    }else{
        message.textContent = "You lost :( Please enroll some money!!! "

    }
}

function newCard(){
    if (money >= 0.5){
    if (tries !== 0){
            if(newTries === 0) { 
                thirdCard = Math.floor(Math.random() * 10) + 2
                cardsArr[2] = thirdCard
                newCard_ = true
                money -= 0.5
                balance.textContent = "your balance : " + money + "$$$"
                play()
            }else{
                message.textContent = "You can't add 4th card :("
                }
        }else {
            message.textContent = "At first you have to start play :)"
        }
    }else {
        message.textContent = "You lost :( Please enroll some money!!! "

    }
}





function hacked() {
    console.log('you have been hacked$$$$')
}
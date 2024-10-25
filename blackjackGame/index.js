let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let player = {
    name: "Per",
    Chips : 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.Chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}
 function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
 }

 function renderGame(){
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to Draw a  new Card?"
    }
    else if(sum === 21){
        message = "You've got a BlackJack"
        hasBlackJack = true
    }
    else if(sum > 21){
        message = "Sorry! You're out of the Game"
        isAlive = false
    }
    messageEl.textContent = message

 }

 function newCard(){
    if(sum<21){
        let card = getRandomCard()
        sum += card
        cards.push(card)
    }
    renderGame()
 }

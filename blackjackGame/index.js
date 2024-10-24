let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

function randomCard(){
    let randomNumber = Math.floor(Math.random()*13 + 1)
    if(randomNumber >10){
            return 10
        }else if(randomNumber===1){
            return 11
        }else{
            return randomNumber
        }
    }

function startGame(){
    isAlive=true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for(let i=0;i=cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " +sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
        //messageEl.textContent=message
        
    } else if(sum === 21){
        message= "You've got BlackJack!!"
        //messageEl.textContent=message
        hasBlackJack=true
    }else{
        message = "Sorry, You're out of the Game!"
       // messageEl.textContent=message
        isAlive = false
    }
    messageEl.textContent = message
   
}

function newCard(){
    if(sum<21){
        let card = randomCard()
        sum += card
        cards.push(card)
        startGame()
    }
 }
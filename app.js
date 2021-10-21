//Black Jack


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Mark",
    chips: 150
}

playerEl = document.getElementById("player-el")

playerEl.textContent = `${player.name} ${": $"} ${player.chips}`

function getRandomCard(){
    let randomNumer = Math.floor(Math.random() * 13) +1
    if (randomNumer > 10){
        return 10
    }
    else if (randomNumer === 1){
        return 11
    }
    else {
        return randomNumer
    }
}  


function renderGame() {
    cardsEl.textContent = `${"Cards: "}`
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} ${" "}`;
    }
    
    sumEl.textContent = `${"Sum: "} ${sum}`

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } 
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } 
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

console.log(hasBlackJack);
console.log(isAlive);

// BlackJack

// Dark Theme
var icon = document.getElementById("icon");

icon.onclick = () => {
  document.body.classList.toggle("dark-theme")
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./lightmode.svg" 
  } else {
    icon.src = "./darkmode.svg"
  }
}


const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
]
let cardChosen = []
let cardChosenId = []
let score = 100;
const cardsWon = []
 
cardArray.sort(() => 0.5 - Math.random())

const GridDisplay = document.querySelector('#grid')
const result = document.getElementById('score')

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    GridDisplay.appendChild(card)
  }
}

function checkMatch(){
  const cards = document.querySelectorAll('img')

  if(cardChosenId[0] == cardChosenId[1]){
    alert('you have clicked the same image')
  }

  if(cardChosen[0] == cardChosen[1]){
    score+=100;
    cards[cardChosenId[0]].setAttribute('src', 'images/white.png')
    cards[cardChosenId[1]].setAttribute('src', 'images/white.png')
    cards[cardChosenId[0]].removeEventListener('click', flipCard)
    cards[cardChosenId[1]].removeEventListener('click', flipCard)
    cardsWon.push(cardChosen[0])
  }else{
    score-=10
    cards[cardChosenId[0]].setAttribute('src', 'images/blank.png')
    cards[cardChosenId[1]].setAttribute('src', 'images/blank.png')
  }

  cardChosen = []
  cardChosenId = []
  result.innerHTML = score

  if(cardsWon.length == cardArray.length/2){
    result.innerHTML = "You Won"
  }
}

function flipCard(){
  const cardId = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardChosen.length == 2) {
    setTimeout(checkMatch, 1000)
  }
}

createBoard()
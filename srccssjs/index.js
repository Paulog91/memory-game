// card options

const cardArray = [
  {
    name: "fries",
    img: "srccssjs/images/fries.png",
  },
  {
    name: "cheesburger",
    img: "srccssjs/images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "srccssjs/images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "srccssjs/images/pizza.png",
  },
  {
    name: "milkshake",
    img: "srccssjs/images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "srccssjs/images/hotdog.png",
  },
  {
    name: "fries",
    img: "srccssjs/images/fries.png",
  },
  {
    name: "cheesburger",
    img: "srccssjs/images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "srccssjs/images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "srccssjs/images/pizza.png",
  },
  {
    name: "milkshake",
    img: "srccssjs/images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "srccssjs/images/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardsChoosen = [];
let cardsChoosenIds = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "srccssjs/images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChoosen.push(cardArray[cardId].name);
  cardsChoosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChoosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
  console.log(cardsChoosenIds);
}

function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChoosenIds[0];
  const optionTwoId = cardsChoosenIds[1];

  if (optionOneId == optionTwoId) {
    alert("You have clicked the same image!");
    cards[optionOneId].setAttribute("src", "srccssjs/images/blank.png");
    cards[optionTwoId].setAttribute("src", "srccssjs/images/blank.png");
  } else if (cardsChoosen[0] === cardsChoosen[1]) {
    alert("you got a match!");
    cards[optionOneId].setAttribute("src", "srccssjs/images/white.png");
    cards[optionTwoId].setAttribute("src", "srccssjs/images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push[cardsChoosen];
  } else {
    cards[optionOneId].setAttribute("src", "srccssjs/images/blank.png");
    cards[optionTwoId].setAttribute("src", "srccssjs/images/blank.png");
    alert("Sorry! try again");
  }
  cardsChoosen = [];
  cardsChoosenIds = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = " Congratulations you won!";
  }
}

createBoard();

"use strict";

const button = document.querySelector(".js-btn");
const select = document.querySelector(".js-select");
const msg = document.querySelector(".js-msg");
const accPlayer = document.querySelector(".js-accplayer");
const accComputer = document.querySelector(".js-scccomputer");
let numberRandon;

function getRandomNumber(max) {
  numberRandon = Math.ceil(Math.random() * 9);
  console.log("numberRandon es" + numberRandon);
  return numberRandon;
}
function playing() {
  const movplayer = select.value;
  if (movplayer === numberRandon) {
    msg.innerHTML = "Empate";
  } else if (
    (numberRandon <= 3 && movplayer === "papel") ||
    (numberRandon >= 7 && movplayer === "tijera") ||
    (numberRandon > 3 && numberRandon < 7 && movplayer === "piedra")
  ) {
    msg.innerHTML = "Has ganado!";
  } else {
    msg.innerHTML = "Has perdido";
  }
}

function handleClick(event) {
  event.preventDefault();
  getRandomNumber();
  playing();
}

button.addEventListener("click", handleClick);

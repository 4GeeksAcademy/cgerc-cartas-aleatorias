import "bootstrap";
import "./style.css";

window.onload = function () {
  generadorCartasAleatorias();
  document.querySelector("#nuevaCarta").addEventListener("click", generadorCartasAleatorias)

}

function generadorCartasAleatorias() {
  let arrNumber = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
  let arrSymbol = ['♦', '♥', '♠', '♣'];


  let numero = Math.floor(Math.random() * arrNumber.length);
  let simbolo = Math.floor(Math.random() * arrSymbol.length);

  let symbol = arrSymbol[simbolo];


  document.querySelector(".top-left-icon").textContent = arrSymbol[simbolo];
  document.querySelector(".top-right-icon").textContent = arrSymbol[simbolo];
  document.querySelector(".center-number-icon").textContent = arrNumber[numero];
  

  const color = (symbol === '♦' || symbol === '♥') ? 'red' : 'black';
  document.querySelector(".top-left-icon").style.color = color;
  document.querySelector(".top-right-icon").style.color = color;
  
}




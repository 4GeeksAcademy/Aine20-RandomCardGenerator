window.onload = () => {
  let randomSymbol = generateRandomSymbol();
  document.getElementById("topSymbol").innerHTML = randomSymbol;
  document.getElementById("bottomSymbol").innerHTML = randomSymbol;
  document.getElementById("number").textContent = generateRandomNumber();


  let symbolElements = document.querySelectorAll("#topSymbol, #bottomSymbol");
  for (let i = 0; i < symbolElements.length; i++) {
    let symbol = symbolElements[i].textContent;
    if (symbol === "♦️" || symbol === "♥️") {
      symbolElements[i].classList.add("redSymbol");
    }
  }
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSymbol = () => {
  let symbols = ["♦️", "♠️", "♥️", "♣️"];
  let indexSymbol = Math.floor(Math.random() * symbols.length);
  return symbols[indexSymbol];
};






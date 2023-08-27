// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";
  
title = "Think Tank";
expression = "Feeling claustrophobic?";
comment = "outside the box";
answer = "UHUGU";
getNewText();

// Display text inline to hide button
document.getElementById("bot-comment").style.display = "inline-block"; 

// Checks if answer is correct
document.getElementById("c5-check").onclick = function() {ugaC5()}; 
  
let ugaC5 = () => {
  document.getElementById("game-wrapper").style.display = "none";
  document.getElementById("c5-check").style.display = "none";
  title = "Nice Work";
  expression = "The Clue is..."
  comment = "";
  document.getElementById("victory-clue").innerText = "believe";
  document.getElementById("victory-clue").style.display = "block";
  getNewText()
}

// Updates text in console
function getNewText () {
  document.getElementById("title").innerText = title;
  document.getElementById("bot-expression").innerText = expression;
  document.getElementById("bot-comment").innerText = comment;
}
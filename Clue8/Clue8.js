// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";

title = "Color-full?";
expression = "Oooh noo!";
comment = "What is happening on line 6?";
getNewText();

// Color buttons
document.getElementById("color1").onclick = function() {changeColorOne(document.getElementById("color1"))};
document.getElementById("color2").onclick = function() {changeColorOne(document.getElementById("color2"))};
document.getElementById("color3").onclick = function() {changeColorOne(document.getElementById("color3"))};
document.getElementById("color4").onclick = function() {changeColorOne(document.getElementById("color4"))};
document.getElementById("color5").onclick = function() {changeColorOne(document.getElementById("color5"))};

function changeColorOne(colorCircle) {
  if (colorCircle.style.backgroundColor === "black") {
    colorCircle.style.backgroundColor = "red";
  } else if (colorCircle.style.backgroundColor === "red") {
    colorCircle.style.backgroundColor = "blue";
  } else if (colorCircle.style.backgroundColor === "blue") {
    colorCircle.style.backgroundColor = "green";
  } else if (colorCircle.style.backgroundColor === "green") {
    colorCircle.style.backgroundColor = "yellow";
  } else if (colorCircle.style.backgroundColor === "yellow") {
    colorCircle.style.backgroundColor = "pink";
  } else {
    colorCircle.style.backgroundColor = "red";
  }
}

// Check for correct combination of colors
document.getElementById("c8-check").onclick = function() {checkColors()};

function checkColors() {
  let color1 = document.getElementById("color1").style.backgroundColor;
  let color2 = document.getElementById("color2").style.backgroundColor;
  let color3 = document.getElementById("color3").style.backgroundColor;
  let color4 = document.getElementById("color4").style.backgroundColor;
  let color5 = document.getElementById("color5").style.backgroundColor;

  if (color1 === "blue" && color2 === "green" && color3 === "yellow" && color4 === "pink" && color5 === "red") {
    document.getElementById("game-wrapper").style.display = "none";
    title = "Nice Work";
    expression = "The Clue is..."
    comment = "";
    getNewText();
    document.getElementById("victory-clue").innerText = "tolerance";
    document.getElementById("victory-clue").style.display = "block";
  } else {
    document.getElementById("c8-check").style.borderBlockColor = "red";
    setTimeout(() => {
    document.getElementById("c8-check").style.borderBlockColor = "gray";
    }, 1500);
  }
}

// Updates text in console
function getNewText () {
  document.getElementById("title").innerText = title;
  document.getElementById("bot-expression").innerText = expression;
  document.getElementById("bot-comment").innerText = comment;
}
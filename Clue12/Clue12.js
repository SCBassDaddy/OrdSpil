// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";

title = "The Maze";
expression = "It's a maze-ing";
comment = "Find the hidden clue in the maze.";
answer = "infinity";
getNewText();

// Room counter 
let roomCounter = 0;
let roomOpacity = 1;
let bot = document.getElementById("response-bot");
bot.innerText = "Where to go?";

document.getElementById("buttonN").onclick = function() {roomCounterUp()};
document.getElementById("buttonE").onclick = function() {roomCounterUp()};
document.getElementById("buttonW").onclick = function() {roomCounterUp()};
document.getElementById("buttonS").onclick = function() {roomCounterUp()};

function roomCounterUp() {
  roomCounter++;

  document.getElementById("game-wrapper").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("game-wrapper").style.opacity = 1;
    }, 100);

    if (roomCounter === 1) {
      bot.innerText = "Let's go";
    } else if (roomCounter === 4) {
      bot.innerText = "Is this the right way?";
    } else if (roomCounter === 7) {
      bot.innerText = "Are you just guessing?";
    } else if (roomCounter === 10) {
      bot.innerText = "Really???";
    } else if (roomCounter === 13) {
      bot.innerText = "This is not a clicker game!";
    } else if (roomCounter === 16) {
      bot.innerText = "Oh wait!!...you're getting close!";
    } else if (roomCounter === 19) {
      bot.innerText = "Noooot :P";
    } else if (roomCounter === 22) {
      bot.innerText = "Think about, what you're doing";
    } else if (roomCounter === 25) {
      bot.innerText = "Is this clue really that important?";
    } else if (roomCounter === 28) {
      bot.innerText = "Wait...what's that?";
      document.getElementById("kick8").style.display = "block";
    } else if (roomCounter === 31) {
      bot.innerText = "Could this be useful?";
    } else if (roomCounter === 34) {
      bot.innerText = "I'm getting bored...";
    } else if (roomCounter === 37) {
      bot.innerText = "Here's another one :)";
      document.getElementById("rec").style.display = "block";
    } else if (roomCounter === 40) {
      bot.innerText = "WOW!!!!!";
    } else if (roomCounter === 43) {
      bot.innerText = "You still don't get it?";
    } else if (roomCounter === 46) {
      bot.innerText = "A last one then...";
      document.getElementById("inf").style.display = "block";
    } else if (roomCounter === 49) {
      bot.innerText = "You see now?";
    } else if (roomCounter === 52) {
      bot.innerText = "No?????";
    } else if (roomCounter === 55) {
      bot.innerText = "Ok, I give up!";
    } else if (roomCounter === 58) {
      bot.innerText = "Just wake me up, when you're done";
    } else if (roomCounter === 60) {
      bot.innerText = "...zzzZZZzzz...";
    }  
}

// Check answer
document.getElementById("answer-submit").onclick = function() {checkSvar()}

let checkSvar = () => {
  if (document.getElementById("answer").value.toLowerCase() === answer) {
      document.getElementById("game-wrapper").style.display = "none";
      title = "Nice Work";
      expression = "The Clue is..."
      comment = "";
      document.getElementById("victory-clue").innerText = "Determination";
      document.getElementById("victory-clue").style.display = "block";
      getNewText()
    } else {
      document.getElementById("answer-submit").style.borderBlockColor = "red"
      setTimeout(() => {
        document.getElementById("answer-submit").style.borderBlockColor = "gray";
        document.getElementById("answer").value = null;
        }, 1000);
    }
}

// Updates text in console
function getNewText () {
  document.getElementById("title").innerText = title;
  document.getElementById("bot-expression").innerText = expression;
  document.getElementById("bot-comment").innerText = comment;
}

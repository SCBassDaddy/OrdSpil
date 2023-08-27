// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";

title = "The Storm";
expression = "Don't blow this!";
comment = "'The answer, my friend, is blowing in the wind'";
answer = "blowing in the wind";
getNewText();

// Stormbuttons value
function getStormButtonValue() {
  let randNum = Math.floor(Math.random() * 8);
  let val = "";
  switch (randNum) {
    case 0:
      val = "THE ANSWER";
      break;
    case 1:
      val = "Try me";
      break;
    case 2:
      val = "Don't do it";
      break;
    case 3:
      val = "WOOOSSHH";
      break;
    case 4:
      val = "Not me!";
      break;
    case 5:
      val = "Over here";
      break;
    case 6:
      val = "Click me";
      break;
    case 7:
      val = "Click bait";
      break; 
    default:
      val = "This one :)";
      break;  
  }
  return val;
}

// StormButton get new position and value
let b1 = document.getElementById("stormButton1");
b1.value = "Click me!";
b1.style.top = "50px";
b1.style.backgroundColor = "yellow";

let b2 = document.getElementById("stormButton2");
b2.value = "The answer";
b2.style.top = "200px";
b2.style.backgroundColor = "green";

setInterval(b1NewVal, 2000);
setInterval(b2NewVal, 2000);

function b1NewVal () {
  b1.value = getStormButtonValue();
  let randNum = Math.floor(Math.random() * 300);
  b1.style.top = randNum + "px";
  b1.style.backgroundColor = setColor();
}

function b2NewVal () {
  b2.value = getStormButtonValue();
  let randNum = Math.floor(Math.random() * 300);
  b2.style.top = randNum + "px";
  b2.style.backgroundColor = setColor();
}

// Calc a response to player
let response = document.getElementById("c11-response");

b1.onclick = function() {response.innerText = setResponse()};
b2.onclick = function() {response.innerText = setResponse()};

function setResponse() {
  let randNum = Math.floor(Math.random() * 8);
  let val = "";
  switch (randNum) {
    case 0:
      val = "ah HA Ha Ha haaa!";
      break;
    case 1:
      val = "Nope...";
      break;
    case 2:
      val = "Try again";
      break;
    case 3:
      val = "Not this one";
      break;
    case 4:
      val = "Too bad!";
      break;
    case 5:
      val = "Ti hi hi hoho hooo!";
      break;
    case 6:
      val = "WROOONG";
      break;
    case 7:
      val = "booOORRRInnngg!";
      break;
    default:
      val = "NO!";  
  }
  return val;
}

function setColor() {
  let randNum = Math.floor(Math.random() * 5);
  let val = "";
  switch (randNum) {
    case 0:
      val = "blue";
      break;
    case 1:
      val = "red";
      break;
    case 2:
      val = "green";
      break;
    case 3:
      val = "purple";
      break;
    case 4:
      val = "yellow";
      break;
    default:
      val = "NO!";  
  }
  return val;
}

// Checks for correct answer in text input
document.getElementById("answer-submit").onclick = function() {checkSvar()}

let checkSvar = () => {
  if (document.getElementById("answer").value.toLowerCase() === answer) {
      document.getElementById("game-wrapper").style.display = "none";
      title = "Nice Work";
      expression = "The Clue is..."
      comment = "";
      document.getElementById("victory-clue").innerText = "realization";
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

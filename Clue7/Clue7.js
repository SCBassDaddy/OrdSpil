// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";

title = "The Poet";
expression = "Who am I thinking of?";
comment = "This is not for kids...or is it?";
answer = "halfdan";
getNewText();

// Checks for correct answer in text input
document.getElementById("answer-submit").onclick = function() {checkSvar()}

let checkSvar = () => {
  if (document.getElementById("answer").value.toLowerCase().includes("halfdan")) {
      document.getElementById("game-wrapper").style.display = "none";
      title = "Nice Work";
      expression = "The Clue is..."
      comment = "";
      document.getElementById("victory-clue").innerText = "expression";
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
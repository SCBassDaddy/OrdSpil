// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";
let answer2 = "";

title = "Relatively Easy";
expression = "Frank-Einstein?";
comment = "What made this man one of the most important people on the planet?";
answer = "iq";
answer2 = "intelligence";
getNewText();

// Checks for correct answer in text input
document.getElementById("answer-submit").onclick = function() {checkSvar()};

let checkSvar = () => {
  if (document.getElementById("answer").value.toLowerCase().includes(answer) || document.getElementById("answer").value.toLowerCase().includes(answer2)) {
      document.getElementById("game-wrapper").style.display = "none";
      title = "Nice Work";
      expression = "The Clue is..."
      comment = "";
      document.getElementById("victory-clue").innerText = "intelligence";
      document.getElementById("victory-clue").style.display = "block";
      getNewText()
    } else if ((document.getElementById("answer").value.toLowerCase().includes("mc2") || document.getElementById("answer").value.toLowerCase().includes("relativity"))) {
      expression = "NERD!"
      comment = "You clearly lack, whatever made him so special";
      document.getElementById("answer-submit").style.borderBlockColor = "red"
      setTimeout(() => {
        document.getElementById("answer-submit").style.borderBlockColor = "gray";
        document.getElementById("answer").value = null;
        }, 1000);
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

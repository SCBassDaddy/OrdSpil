// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";

title = "Bonus";
expression = "Mirror, Mirror on the Wall";
comment = "Who's the Fairest of Them All?";
answer = "sebastian";
getNewText();

// Checks for correct answer in text input
document.getElementById("answer-submit").onclick = function() {checkSvar()}

let checkSvar = () => {
  if (document.getElementById("answer").value.toLowerCase() === answer) {
      document.getElementById("game-wrapper").style.display = "none";
      title = "Of course...";
      expression = "It could only be him..."
      comment = "";
      document.getElementById("credits").style.display = "block";
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
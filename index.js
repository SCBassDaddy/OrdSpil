let title = "";
let expression = "";
let comment = "";
let answer = "";

title = "Mystery 13";
expression = "How to play";
comment = "Find all the clues. Each of them will return a word. Remember to write down the words, as I won't bother to remember them for you. When you have all the words, you have all you need to solve the puzzle below.";
answer = "collaboration";
getNewText();

// Checks for correct answer in text input
document.getElementById("answer-submit").onclick = function() {checkSvar()}

let checkSvar = () => {
  if (document.getElementById("answer").value.toLowerCase() === answer) {
      document.getElementById("game-wrapper").style.display = "none";
      document.getElementById("main-answer-box").style.display = "none";
      document.getElementById("clues-wrapper").style.display = "none";
      title = "Great";
      expression = "You finally did it"
      comment = "";
      document.getElementById("win-page").style.display = "block";
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
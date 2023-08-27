// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";

title = "The Bridge";
expression = "Listen and learn";
comment = "Three guys walked for one day to go to the city. When they came to a bridge and saw, that it was guarded by two bears, they returned. They went back the next day with six weapons, killed the two bears and celebrated for four days.";
answer = "";
getNewText();

// Counts steps checked
function stepsChecked() {
  let numStepsChecked = 0;
  let checkedSteps = document.getElementsByClassName("c6-step-nr");
  for (let i = 0; i < checkedSteps.length; i++) {
    if(checkedSteps[i].checked === true) {
      numStepsChecked++;
    }
  }
  return numStepsChecked;
}

// Resets checked steps
function resetBridgeEncounter() {
  setTimeout(() => {
      let checkedSteps = document.getElementsByClassName("c6-step-nr");
      for (let i = 0; i < checkedSteps.length; i++) {
        checkedSteps[i].checked = false;
      }
    }, 3000);
  }

// Resets label color
function resetLabels () {
  setTimeout(() => {
    let labelBackReset = document.getElementsByTagName("label");
    for (let i = 0; i < labelBackReset.length; i++) {
      labelBackReset[i].style.backgroundColor = "transparent";
    }
  }, 3000);
}

// Checks if enough steps checked
document.getElementById("c6-check").onclick = function() {ugaC6()};
let c6CorrectAnswers = 0;

let ugaC6 = () => {
if (stepsChecked() == 8) {

  if (document.getElementById("c6-yes-1").checked) {
    c6CorrectAnswers++;
    document.getElementById("c6-win-label1").style.backgroundColor = "green";
  }

  if (document.getElementById("c6-yes-2").checked) {
    c6CorrectAnswers++;
    document.getElementById("c6-win-label2").style.backgroundColor = "green";
  }

  if (document.getElementById("c6-yes-3").checked) {
    c6CorrectAnswers++;
    document.getElementById("c6-win-label3").style.backgroundColor = "green";
  }

  if (document.getElementById("c6-yes-4").checked) {
    c6CorrectAnswers++;
    document.getElementById("c6-win-label4").style.backgroundColor = "green";
  }

  if (document.getElementById("c6-yes-4").checked) {
    c6CorrectAnswers++;
    document.getElementById("c6-win-label4").style.backgroundColor = "green";
  }

  if (document.getElementById("c6-yes-5").checked) {
    c6CorrectAnswers++;
    document.getElementById("c6-win-label5").style.backgroundColor = "green";
  }

  if (document.getElementById("c6-yes-6").checked) {
    c6CorrectAnswers++;
    document.getElementById("c6-win-label6").style.backgroundColor = "green";
  }

  if (document.getElementById("c6-yes-7").checked) {
    c6CorrectAnswers++;
    document.getElementById("c6-win-label7").style.backgroundColor = "green";
  }

  if (document.getElementById("c6-yes-8").checked) {
    c6CorrectAnswers++;
    document.getElementById("c6-win-label8").style.backgroundColor = "green";
  }

  if (c6CorrectAnswers == 9) {
    clueNumber = 0;
    document.getElementById("game-wrapper").style.display = "none";
    document.getElementById("c6-check").style.display = "none";
    title = "Nice Work";
    expression = "The Clue is..."
    comment = "";
    document.getElementById("victory-clue").innerText = "pursue";
    document.getElementById("victory-clue").style.display = "block";
    getNewText()
    c6CorrectAnswers = 0
  } else {
    resetBridgeEncounter()
    resetLabels ()
    c6CorrectAnswers = 0
  }
  } else {
    document.getElementById("c6-check").style.borderColor = "red";
    setTimeout(() => {
      document.getElementById("c6-check").style.borderColor = "gray";
    }, 1000);
  }
}

// Updates text in console
function getNewText () {
  document.getElementById("title").innerText = title;
  document.getElementById("bot-expression").innerText = expression;
  document.getElementById("bot-comment").innerText = comment;
}
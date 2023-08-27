// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";
let answer2 = "";

title = "Firewall";
expression = "Hello detective";
comment = "Hack the terminal to find a very important hint";
answer = "american pie";
answer2 = "american pi";
getNewText();

// Check for number of locks hacked
document.getElementById("hack-submit").onclick = function() {
  let lock1 = document.getElementById("fire-lock1").value;
  let lock2 = document.getElementById("fire-lock2").value;
  let lock3 = document.getElementById("fire-lock3").value;
  let lock4 = document.getElementById("fire-lock4").value;
  if (lock1 > 0 && lock2 > 0 && lock3 > 0 && lock4 > 0) {
  checkHack()
  }
};

let checkHack = () => {
  let lock1 = document.getElementById("fire-lock1").value;
  let lock2 = document.getElementById("fire-lock2").value;
  let lock3 = document.getElementById("fire-lock3").value;
  let lock4 = document.getElementById("fire-lock4").value;
  let openLocks = 0;

  if (lock1 == 2) {
    openLocks++;
  } 
  
  if (lock2 == 5) {
    openLocks++;
  } 
  
  if (lock3 == 1) {
    openLocks++;
  } 
  
  if (lock4 == 3) {
    openLocks++;
  }


  if (openLocks === 4) {
    document.getElementById("flag-back").style.display = "block";
    document.getElementById("firewallHint").style.display = "block";
    document.getElementById("firewallCheck").innerText = "WOW! You've found a file containing this:"; 
  } else { 
    document.getElementById("firewallCheck").innerText = `You've opened ${openLocks} locks`;
    resetFirewall()
  }
}

// Resets all locks
function resetFirewall() {
  setTimeout(() => {
    document.getElementById("fire-lock1").value = null;
    document.getElementById("fire-lock2").value = null;
    document.getElementById("fire-lock3").value = null;
    document.getElementById("fire-lock4").value = null;
    document.getElementById("firewallCheck").innerText = "";
    }, 2000);
  }

// Checks for correct answer in text input
document.getElementById("answer-submit").onclick = function() {checkSvar()};

let checkSvar = () => {
  if (document.getElementById("answer").value.toLowerCase() === answer || document.getElementById("answer").value.toLowerCase() === answer2) {
      document.getElementById("game-wrapper").style.display = "none";
      title = "Nice Work";
      expression = "The Clue is..."
      comment = "";
      document.getElementById("victory-clue").innerText = "analysis";
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

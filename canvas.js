//Canvas setup
const CANVAS = document.querySelector("CANVAS");

const C = CANVAS.getContext("2d");

CANVAS.width = 1000;
CANVAS.height = 800;

//-----Setup-----//
//Level and timer declarations
let level = 1;
let attempts = 0;
let fails = 0;
let killAnimationTimer = 0;
let bonus = 0;
let damageToMonster
let pointsToPlayer
let showDamageTimer = 0;
let showPointsTimer = 0;
let gameRunning = false;

function gameRunningState() {
  gameRunning = true;
}

//-----BACKGROUND IMAGES-----//

//Area 1
const bgA11Img = new Image();
bgA11Img.src = "./img/Forrest1.png";

const bgA12Img = new Image();
bgA12Img.src = "./img/Mountains1.png";

//Area 2
const bgA21Img = new Image();
bgA21Img.src = "./img/SandOasis.png";

const bgA22Img = new Image();
bgA22Img.src = "./img/SandTent.png";

//Area 3
const bgA31Img = new Image();
bgA31Img.src = "./img/TentEvil.png";

const bgA32Img = new Image();
bgA32Img.src = "./img/MountainsEvil.png";

//Current background image
let backgroundImg = bgA11Img;

//Pick background and conditions
function updateBackground() {
  let randomBackground = Math.floor(Math.random() * 2)

  if (level <= 5 && randomBackground === 0) {
    backgroundImg = bgA11Img;
  } else if (level <= 5 && randomBackground === 1) {
    backgroundImg = bgA12Img;
  } else if (level > 5 &&  level <= 10 && randomBackground === 0) {
    backgroundImg = bgA21Img;
  } else if (level > 5 &&  level <= 10 && randomBackground === 1) {
    backgroundImg = bgA22Img;
  } else if (level > 10 &&  level <= 15 && randomBackground === 0) {
    backgroundImg = bgA31Img;
  } else if (level > 10 &&  level <= 15 && randomBackground === 1) {
    backgroundImg = bgA32Img;
}
}

//-----PLAYER-----//

//Player image
const playerImg = new Image();
playerImg.src = "./img/hero.png";

//-----MONSTERS-----//

//Area 1
const ratA1Img = new Image();
ratA1Img.src = "./img/rat.png";

const alienA1Img = new Image();
alienA1Img.src = "./img/Alien.png";

const bullA1Img = new Image();
bullA1Img.src = "./img/Bull.png";

const fairyA1Img = new Image();
fairyA1Img.src = "./img/FatFairy.png";

//Area 2
const ratA2Img = new Image();
ratA2Img.src = "./img/RatSand.png";

const alienA2Img = new Image();
alienA2Img.src = "./img/AlienSand.png";

const bullA2Img = new Image();
bullA2Img.src = "./img/BullSand.png";

const fairyA2Img = new Image();
fairyA2Img.src = "./img/FatFairySand.png";

//Area 3
const ratA3Img = new Image();
ratA3Img.src = "./img/RatEvil.png";

const alienA3Img = new Image();
alienA3Img.src = "./img/AlienEvil.png";

const bullA3Img = new Image();
bullA3Img.src = "./img/BullEvil.png";

const fairyA3Img = new Image();
fairyA3Img.src = "./img/FatFairyEvil.png";

//Bosses
const bossA1Img = new Image();
bossA1Img.src = "./img/BookWorm.png";

const bossA2Img = new Image();
bossA2Img.src = "./img/BookWormSand.png";

const bossA3Img = new Image();
bossA3Img.src = "./img/BookWormEvil.png";

//Image arguments
let monsterImg = ratA1Img;
let monsterX = 200;
let monsterY = 200;
let monsterW = 200;
let monsterH = 200;

//Healthbar arguments
let healthX = 200;
let healthY = 200;
let healthW = 200;
let healthValue = 200;

//Monsters array
const monsterArrA1 = ["rat", "alien", "bull", "fairy"]
const monsterArrA2 = ["rat2", "alien2", "bull2", "fairy2"]
const monsterArrA3 = ["rat3", "alien3", "bull3", "fairy3"]
const bossArr = ["boss1", "boss2", "boss3", ]

//Monster declarations
let randomMonster = 0
let whichMonster = monsterArrA1[randomMonster]

//Pick random monster and conditions
function findMonster() {
randomMonster = Math.floor(Math.random() * 4)

if (level <= 4 && level < 5) {
  whichMonster = monsterArrA1[randomMonster]
} else if (level === 5) {
  whichMonster = bossArr[0]
} else if (level > 5 && level <= 9) {
  whichMonster = monsterArrA2[randomMonster]
} else if (level === 10) {
  whichMonster = bossArr[1]
} else if (level > 10 && level <= 14) {
  whichMonster = monsterArrA3[randomMonster]
} else if (level === 15) {
  whichMonster = bossArr[2]
}

//Check which monster to draw
switch (whichMonster) {
  case "rat":
    monsterImg = ratA1Img; monsterX = 750; monsterY = 515; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  case "alien":
    monsterImg = alienA1Img; monsterX = 750; monsterY = 415; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  case "bull":
    monsterImg = bullA1Img; monsterX = 750; monsterY = 430; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  case "fairy":
    monsterImg = fairyA1Img; monsterX = 750; monsterY = 415; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  
  case "rat2":
    monsterImg = ratA2Img; monsterX = 750; monsterY = 585; monsterW = 200; monsterH = 150;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  case "alien2":
    monsterImg = alienA2Img; monsterX = 750; monsterY = 415; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  case "bull2":
    monsterImg = bullA2Img; monsterX = 750; monsterY = 430; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  case "fairy2":
    monsterImg = fairyA2Img; monsterX = 750; monsterY = 415; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  
  case "rat3":
    monsterImg = ratA3Img; monsterX = 750; monsterY = 585; monsterW = 200; monsterH = 150;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  case "alien3":
    monsterImg = alienA3Img; monsterX = 750; monsterY = 415; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  case "bull3":
    monsterImg = bullA3Img; monsterX = 750; monsterY = 430; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break
  case "fairy3":
    monsterImg = fairyA3Img; monsterX = 750; monsterY = 415; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 400;
    break

  case "boss1":
    monsterImg = bossA1Img; monsterX = 750; monsterY = 415; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 800;
    break
  case "boss2":
    monsterImg = bossA2Img; monsterX = 750; monsterY = 415; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 800;
    break
  case "boss3":
    monsterImg = bossA3Img; monsterX = 750; monsterY = 415; monsterW = 200; monsterH = 300;
    healthX = 700; healthY = 570; healthW = 300; healthValue = 800;
    break
}
}

//------UI-------//
let points = 0;

//Timer for deathanimation and bonus
function setKillAnimationTimer() {
  killAnimationTimer = 0;
  bonus = 0;
}

function setDamageTimer() {
  showPointsTimer = 0;
  showDamageTimer = 0;
}

//AnswerBox
const answerBox = new Image();
answerBox.src = "./img/AnswerBox.png";

//Color for word
let sætningColor = "red"

//Hide textarea in the beginning
document.getElementById("answerText").style.visibility = 'hidden'

//Textarea cursor focus
function setCursorToTextarea() {
document.getElementById("answerText").focus();
}

//Hide textarea in the beginning
document.getElementById("svarKnap").style.visibility = 'hidden'

//svarKnap click function
document.getElementById("svarKnap").onclick = function() {checkSvar()};

//startKnap click function
document.getElementById("startKnap").onclick = function() {animate(), setCursorToTextarea(), gameRunningState()};

//Ord til duel
let ordTilDuel = ""
function findOrdTilDuel() {
ordTilDuel = Math.floor(Math.random() * 107)
}

//------INIT------//
function init() {
  updateBackground()
  findMonster()
  findOrdTilDuel()
  points = 0;
}

init() 

//OrdDerVises Declaration
let ordDerVises = wordsArr[ordTilDuel].rodetOrd

//Check svaret
function checkSvar() {
  let answer = document.getElementById("answerText").value

  if (answer === wordsArr[ordTilDuel].ord && attempts === 0) {
    healthValue -= 200;
    damageToMonster = 200;
    points += 200;
    pointsToPlayer = 200;
    showDamageTimer = 1;
    showPointsTimer = 1;
    attempts = 0
    sætningColor = "red"
    if (healthValue > 0) {
      findOrdTilDuel() 
      ordDerVises = wordsArr[ordTilDuel].rodetOrd
      }
  } else if (answer === wordsArr[ordTilDuel].ord && attempts > 0) {
    healthValue -= 50;
    damageToMonster = 50;
    points += 50;
    pointsToPlayer = 50;
    showDamageTimer = 1;
    showPointsTimer = 1;
    attempts = 0
    sætningColor = "red"
    if (healthValue > 0) {
      findOrdTilDuel() 
      ordDerVises = wordsArr[ordTilDuel].rodetOrd
      }
  } else if (answer !== wordsArr[ordTilDuel].ord) {
    ordDerVises = wordsArr[ordTilDuel].ord
    attempts++
    fails++
    sætningColor = "green"
  }

//When monster is dead
  if (healthValue <= 0 && fails === 0 && level < 16) {
    setTimeout(() => {
    findOrdTilDuel()
    ordDerVises = wordsArr[ordTilDuel].rodetOrd
    findMonster()
    updateBackground()
    }, 1000);
    points += 300
    pointsToPlayer = 200 + 300;
    showPointsTimer = 1;
    fails = 0;
    level++
    killAnimationTimer = 1;
    bonus = 1;
  } else if (healthValue <= 0 && fails > 0 && level < 16) {
    setTimeout(() => {
    findOrdTilDuel()
    ordDerVises = wordsArr[ordTilDuel].rodetOrd
    findMonster()
    updateBackground()
    }, 1000);
    points += 50
    pointsToPlayer = 50 + 100;
    showPointsTimer = 1;
    fails = 0;
    level++
    killAnimationTimer = 1;
  }

  //Set textarea to empty string
  document.getElementById("answerText").value = ""
}

//Animation
function animate() {
  requestAnimationFrame(animate);
  C.clearRect(0, 0, CANVAS.width, CANVAS.height);

  //Hide startKnap
  document.getElementById("startKnap").style.visibility = 'hidden'

  //Show svarKnap
  document.getElementById("answerText").style.visibility = 'visible'

  //Hide svarKnap
  if (level === 16) {
    document.getElementById("answerText").style.visibility = 'hidden'
    endResult(C)
  }

  //Draw levels
  if (level < 16) { 

  //Draw background
  C.drawImage(backgroundImg, 0, 0, 1000, 800)

  //Draw player
  C.drawImage(playerImg, 40, 400, 200, 300)

  //Draw monster
  C.drawImage(monsterImg, monsterX, monsterY, monsterW, monsterH)

  //Draw monster HP
  healthNum(C, healthValue, healthX, healthY)

  //Draw level
  showLevel(C, level)

  //Draw answerBox
  C.drawImage(answerBox,315, 190, 400, 340)

  //Draw sætning
  sætning(C, wordsArr, ordTilDuel, ordDerVises, sætningColor)
  }

  //Draw points
  currentPoints(C, points)

  //Draw killanimation
  if (killAnimationTimer === 1 && level < 15) {
    killAnimation(C)
    if (bonus === 1) {
      showBonus(C)
    }
    setTimeout(() => {
      setKillAnimationTimer()
    }, 1000);
  }

  if (showPointsTimer === 1 && level < 15) {
    showPoints(C, 90, 380, pointsToPlayer)
    if (showDamageTimer === 1) {
      showDamage(C, 800, 380, damageToMonster)
    }
    setTimeout(() => {
      setDamageTimer()
    }, 700);
  }

  //Draw boss text
  if (level === 5 || level === 10 || level === 15) {
      boss(C)
  }

}

//Allow enter-key in textarea
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter" && gameRunning === true) {
    event.preventDefault();
    document.getElementById("svarKnap").click();
  } else if (event.key === "Enter" && gameRunning === false) {
    event.preventDefault();
    document.getElementById("startKnap").click();
  }
});


function healthNum(C, healthValue, healthX, healthY) {
  C.font= "bolder 40px Arial";
  C.fillStyle = "red";
  C.fillText("Liv " + healthValue, healthX + 75, healthY + 200)
}

function currentPoints(C, points) {
  C.font = "bolder 30px Arial";
  C.fillStyle = "blue";
  C.fillText("Point: " + points, 20, 35)
}

function showLevel(C, level) {
  C.font = "bolder 30px Arial";
  C.fillStyle = "blue";
  C.fillText("Bane: " + level, 860, 35)
}

function showPoints(C, x, y, pointsToPlayer) {
  C.font = "bolder 40px Arial";
  C.fillStyle = "Chartreuse";
  C.fillText("+" + pointsToPlayer, x, y)
}

function showDamage(C, x, y, damageToMonster) {
  C.font = "bolder 40px Arial";
  C.fillStyle = "red";
  C.fillText("-" + damageToMonster, x, y)
}

function killAnimation(C) {
  C.beginPath();
  C.strokeStyle = "red"
  C.lineWidth = 30;
  C.moveTo(750, 450);
  C.lineTo(950, 700);
  C.stroke();
}

function boss(C) {
  C.font = "bolder 60px Arial";
  C.fillStyle = "red";
  C.fillText("BOSS", 430, 70)
}

function showBonus(C) {
  C.font = "bolder 40px Arial";
  C.fillStyle = "orange";
  C.fillText("BONUS 0 fejl", 30, 320)
}

function endResult(C) {
  C.font = "bolder 60px Arial";
  C.fillStyle = "blue";
  C.fillText("Flot Klaret", 360, 370)
}

function sætning(C, wordsArr, ordTilDuel, ordDerVises, sætningColor) {
  C.font= "25px Arial";
  C.fillStyle = "blue";
  C.fillText("Skriv ordet ", 340, 310)
  C.fillStyle = sætningColor;
  C.fillText(ordDerVises, 340, 340)
  C.fillStyle = "blue";
  C.fillText("Sætning", 340, 400)
  C.fillStyle = "black";
  C.fillText(wordsArr[ordTilDuel].sætning, 340, 440)
}


// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";

title = "Olympus";
expression = "OMG!";
comment = "Not even these guys know how to stay in line";
getNewText();

// Input god in line
let planetsArr = [];

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let p7 = document.getElementById("p7");
let p8 = document.getElementById("p8");

p1.style.backgroundColor = "black";
p2.style.backgroundColor = "black";
p3.style.backgroundColor = "black";
p4.style.backgroundColor = "black";
p5.style.backgroundColor = "black";
p6.style.backgroundColor = "black";
p7.style.backgroundColor = "black";
p8.style.backgroundColor = "black";

planetsArr.push(p1, p2, p3, p4, p5, p6, p7, p8)

let mercury = "rgb(116, 112, 110)";
let venus = "rgb(140, 147, 39)";
let earth = "rgb(34, 44, 112)";
let mars = "rgb(161, 52, 25)";
let jupiter = "rgb(118, 96, 40)";
let saturn = "rgb(101, 71, 54)";
let uranus = "rgb(97, 188, 222)";
let neptune = "rgb(24, 93, 118)";

let merLock = 0;
let venLock = 0;
let earLock = 0;
let marLock = 0;
let jupLock = 0;
let satLock = 0;
let uraLock = 0;
let nepLock = 0;

document.getElementById("mercury").onclick = function() {
  if (merLock === 0) {
  for (let i = 0; i < planetsArr.length; i++) {
    if (planetsArr[i].style.backgroundColor === "black") {
      planetsArr[i].style.backgroundColor = mercury;
      merLock = 1
      break;
    }
  }
}
};

document.getElementById("venus").onclick = function() {
  if (venLock === 0) {
  for (let i = 0; i < planetsArr.length; i++) {
    if (planetsArr[i].style.backgroundColor === "black") {
      planetsArr[i].style.backgroundColor = venus;
      venLock = 1
      break;
    }
  }
}
};

document.getElementById("earth").onclick = function() {
  if (earLock === 0) {
  for (let i = 0; i < planetsArr.length; i++) {
    if (planetsArr[i].style.backgroundColor === "black") {
      planetsArr[i].style.backgroundColor = earth;
      earLock = 1
      break;
    }
  }
}
};

document.getElementById("mars").onclick = function() {
  if (marLock === 0) {
  for (let i = 0; i < planetsArr.length; i++) {
    if (planetsArr[i].style.backgroundColor === "black") {
      planetsArr[i].style.backgroundColor = mars;
      marLock = 1
      break;
    }
  }
}
};

document.getElementById("jupiter").onclick = function() {
  if (jupLock === 0) {
  for (let i = 0; i < planetsArr.length; i++) {
    if (planetsArr[i].style.backgroundColor === "black") {
      planetsArr[i].style.backgroundColor = jupiter;
      jupLock = 1
      break;
    }
  }
}
};

document.getElementById("saturn").onclick = function() {
  if (satLock === 0) {
  for (let i = 0; i < planetsArr.length; i++) {
    if (planetsArr[i].style.backgroundColor === "black") {
      planetsArr[i].style.backgroundColor = saturn;
      satLock = 1
      break;
    }
  }
}
};
document.getElementById("uranus").onclick = function() {
  if (uraLock === 0) {
  for (let i = 0; i < planetsArr.length; i++) {
    if (planetsArr[i].style.backgroundColor === "black") {
      planetsArr[i].style.backgroundColor = uranus;
      uraLock = 1
      break;
    }
  }
}
};

document.getElementById("neptune").onclick = function() {
  if (nepLock === 0) {
  for (let i = 0; i < planetsArr.length; i++) {
    if (planetsArr[i].style.backgroundColor === "black") {
      planetsArr[i].style.backgroundColor = neptune;
      nepLock = 1
      break;
    }
  }
}
};

document.getElementById("c10-check").onclick = function() {
  let correctPlanetCount = 0;
  for (let i = 0; i < planetsArr.length; i++) {
    if (planetsArr[0].style.backgroundColor === mercury && correctPlanetCount === 0) {
      correctPlanetCount++;
    }
  
    if (planetsArr[1].style.backgroundColor === venus && correctPlanetCount === 1) {
      correctPlanetCount++;
    }

    if (planetsArr[2].style.backgroundColor === earth && correctPlanetCount === 2) {
      correctPlanetCount++;
    }

    if (planetsArr[3].style.backgroundColor === mars && correctPlanetCount === 3) {
      correctPlanetCount++;
    }

    if (planetsArr[4].style.backgroundColor === jupiter && correctPlanetCount === 4) {
      correctPlanetCount++;
    }

    if (planetsArr[5].style.backgroundColor === saturn && correctPlanetCount === 5) {
      correctPlanetCount++;
    }

    if (planetsArr[6].style.backgroundColor === uranus && correctPlanetCount === 6) {
      correctPlanetCount++;
    }

    if (planetsArr[7].style.backgroundColor === neptune && correctPlanetCount === 7) {
      correctPlanetCount++;
    }
  }

  if (correctPlanetCount === 8) {
    document.getElementById("game-wrapper").style.display = "none";
    title = "Nice Work";
    expression = "The Clue is..."
    comment = "";
    getNewText();
    document.getElementById("victory-clue").innerText = "wisdom";
    document.getElementById("victory-clue").style.display = "block";
  } else {
    merLock = 0;
    venLock = 0;
    earLock = 0;
    marLock = 0;
    jupLock = 0;
    satLock = 0;
    uraLock = 0;
    nepLock = 0;

    p1.style.backgroundColor = "black";
    p2.style.backgroundColor = "black";
    p3.style.backgroundColor = "black";
    p4.style.backgroundColor = "black";
    p5.style.backgroundColor = "black";
    p6.style.backgroundColor = "black";
    p7.style.backgroundColor = "black";
    p8.style.backgroundColor = "black";

    document.getElementById("c10-check").style.borderBlockColor = "red";
    setTimeout(() => {
      document.getElementById("c10-check").style.borderBlockColor = "gray";
      }, 1000);
  }
}

// Updates text in console
function getNewText () {
  document.getElementById("title").innerText = title;
  document.getElementById("bot-expression").innerText = expression;
  document.getElementById("bot-comment").innerText = comment;
}
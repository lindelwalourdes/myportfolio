document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("body").style.border = "3px solid";
document.getElementById("head").style.transform = "rotate(15deg)";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.backgroundColor = "#FF0000";
document.getElementById("head").style.borderTop = "5px black solid";
document.getElementById("head").style.transform = "rotate(345deg)";
document.getElementById("nose").style.borderRadius = "10px";
document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "pink";

//ANIMATION//
let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
  let robotPart = e.target;
  let top = 0;
  let id = setInterval(frame, 10);

  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20) {
      clearInterval(id);
    }
  }
}

//ANIMATION FOR THE OTHER EYE
let leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

//NEW ANIMATION FOR ARM
let leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
  let robotPart = e.target;
  let left = 0;
  let id = setInterval(frame, 150);

  function frame() {
    robotPart.style.left = left + "%";
    left++;
    if (left === 70) {
      clearInterval(id);
    }
  }
}

//RIGHT ARM LIFT
let rightArm = document.getElementById("rightarm");
rightArm.addEventListener("click", moveUpBackToo);

function moveUpBackToo(e) {
  let robotPart = e.target;
  let top = 0;
  let id = setInterval(frame, 280);

  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 36) {
      clearInterval(id);
    }
  }
}

// NEW ANIMATION FOR NOSE
let nose = document.getElementById("nose");
nose.addEventListener("click", moveUpBack);

function moveUpBack(e) {
  let robotPart = e.target;
  let top = 0;
  let id = setInterval(frame, 10);

  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 50) {
      clearInterval(id);
    }
  }
}

"use strict";

let canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d"),
  width = canvas.width,
  height = canvas.height;

let grid = function() {
  let blockSize = 10,
    widthInBlocks = width / blockSize,
    heightInBlocks = height / blockSize;

  ctx.strokeStyle = "grey";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(30, 30);
  ctx.lineTo(30, 370);
  ctx.moveTo(10, 340);
  ctx.lineTo(560, 340);
  ctx.stroke();

  for (let i = 340; i > 30; i -= 50) {
    ctx.beginPath();
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 0.5;
    ctx.moveTo(20, i);
    ctx.lineTo(560, i);
    ctx.moveTo(0, 340);
    ctx.fillText(340 - i, 0, i);
    ctx.stroke();
  }

  for (let k = 30; k < 560; k += 50) {
    ctx.beginPath();
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 0.5;
    ctx.moveTo(k, 360);
    ctx.lineTo(k, 30);
    ctx.fillText(k - 30, k, 380);
    ctx.stroke();
  }
};
grid();

let graphic = function() {
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(30, 340);
  ctx.lineTo(180, 290);
  ctx.lineTo(380, 250);
  ctx.lineTo(530, 200);

  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "darkBlue";
  ctx.moveTo(30, 340);
  ctx.lineTo(150, 250);
  ctx.lineTo(380, 280);
  ctx.lineTo(530, 220);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(30, 340);
  ctx.lineTo(120, 200);
  ctx.lineTo(380, 180);
  ctx.lineTo(530, 140);
  ctx.stroke();
};

graphic();
let btnFirst = document.querySelector("#btnFirst");
btnFirst.setAttribute("class", "active");
let btnSecond = document.querySelector("#btnSecond");
let btnThird = document.querySelector("#btnThird");

let button = document.querySelector("button");
canvas.style.opacity = 1;
canvas.style.transition = "1s";

btnFirst.addEventListener("click", function() {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();

  btnFirst.setAttribute("class", "active");
  btnSecond.removeAttribute("class", "active");
  btnThird.removeAttribute("class", "active");

  graphic();
  grid();
});

btnSecond.addEventListener("click", function() {
  ctx.clearRect(0, 0, width, height);

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(30, 200, 50, 140);
  ctx.fillStyle = "darkBlue";
  ctx.fillRect(80, 210, 50, 130);

  ctx.fillStyle = "green";
  ctx.fillRect(130, 140, 50, 200);
  ctx.fillStyle = "black";
  grid();
  btnSecond.setAttribute("class", "active");
  btnFirst.removeAttribute("class", "active");
  btnThird.removeAttribute("class", "active");
});

btnThird.addEventListener("click", function() {
  ctx.clearRect(0, 0, width, height);
  grid();
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(30, 340);
  ctx.bezierCurveTo(90, 150, 300, 300, 530, 140);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(30, 340);
  ctx.bezierCurveTo(120, 210, 300, 250, 530, 200);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "darkBlue";
  ctx.moveTo(30, 340);
  ctx.bezierCurveTo(120, 120, 300, 250, 530, 210);
  ctx.stroke();

  btnThird.setAttribute("class", "active");
  btnFirst.removeAttribute("class", "active");
  btnSecond.removeAttribute("class", "active");
});

let send = document.querySelector("#formSend");
let form = document.querySelector("form");

let modalWindow = document.querySelector(".registry-modal");
let registry = document.querySelector(".registry");

let closeModal = document.querySelector(".btnRegistryModal");

let inp = document.querySelectorAll("input[data-some]");

for (let input of inp) {
  input.addEventListener("blur", function() {
    let rule = this.dataset.some;
    let value = this.value;
    let check;

    switch (rule) {
      case "text":
        check = /^\D+$/.test(value);
        send.disabled = true;
        break;

      case "email":
        check = /\w+@\w+\.\w+/.test(value);
        send.disabled = false;
        break;
    }
    this.classList.remove("invalid");
    this.classList.remove("valid");

    if (check) {
      this.classList.add("valid");
      sendForm();
    } else {
      this.classList.add("invalid");
      send.disabled = true;
    }
  });

  let sendForm = function() {
    send.onclick = function(event) {
      event.preventDefault();
      modalWindow.style.display = "flex";
      registry.style.display = "none";
    };
  };

  closeModal.onclick = function() {
    modalWindow.style.display = "none";
    registry.style.display = "flex";
    send.disabled = true;
  };
}

let blockAbout = document.querySelector(".description");
let textBlock = document.querySelectorAll(".text-block");

let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");

let i = 0;

btnNext.onclick = function() {
  textBlock[i].className = "text-block ";
  i++;

  if (i >= textBlock.length) {
    i = 0;
  }
  textBlock[i].className = "text-block showed";
};

btnPrev.onclick = function() {
  textBlock[i].className = "text-block ";
  i--;

  if (i < 0) {
    i = textBlock.length - 1;
  }
  textBlock[i].className = "text-block showed";
};

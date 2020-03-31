"use strict";

let showModalImg = document.querySelector("#btnOpenModal");
let showModalText = document.querySelector("#btnOpenModalText");

let modalText = document.querySelector(".modal_gallery_text");
let modalImg = document.querySelector(".modal_gallery");
let btnClose = document.querySelectorAll(".btnModalClose");

let models = document.querySelector(".main_picture");
let imgModels = models.querySelector("img");
let btnTurnModels = document.querySelectorAll(".turn_models");

let modelsPrint = modalImg.querySelectorAll("img");
let modelsTextPrint = modalText.querySelectorAll("img");

let printImg = document.querySelector(".blockPrintFront");
let printRearImg = document.querySelector(".blockPrintRear");

let chooseModels = document.querySelectorAll("button[data-choose]");
let nameModels = document.querySelector("#nameModels");

showModalImg.addEventListener("click", function() {
  modalImg.hidden = false;
});

showModalText.addEventListener("click", function() {
  modalText.hidden = false;
});

function closeModal() {
  for (let i = 0; i < btnClose.length; i++) {
    btnClose[0].addEventListener("click", function() {
      modalImg.hidden = true;
    });
    btnClose[1].addEventListener("click", function() {
      modalText.hidden = true;
    });
  }
}

function turnModels() {
  for (let k = 0; k < btnTurnModels.length; k++) {
    btnTurnModels[0].addEventListener("click", function(cost) {
      if (imgModels.hasAttribute("data-futbolka", "")) {
        imgModels.setAttribute("src", "img/futbolka.jpg");
        imgModels.removeAttribute("data-rear", "");
      } else if (imgModels.hasAttribute("data-tolstovka", "")) {
        imgModels.setAttribute("src", "img/tolstovka.jpg");
        imgModels.removeAttribute("data-tolstovkaRear", "");
      } else {
        imgModels.setAttribute("src", "img/maika.jpg");
      }
    });

    btnTurnModels[1].addEventListener("click", function() {
      if (imgModels.hasAttribute("data-futbolka", "")) {
        imgModels.setAttribute("src", "img/futbolkaRear.png");
        imgModels.setAttribute("data-rear", "");
      } else if (imgModels.hasAttribute("data-tolstovka", "")) {
        imgModels.setAttribute("src", "img/tolstovkaRear.png");
        imgModels.setAttribute("data-tolstovkaRear", "");
      } else {
        imgModels.setAttribute("src", "img/maikaRear.png");
      }
    });
  }
}

let drawImgPrint = function() {
  for (let i = 0; i < modelsTextPrint.length; i++) {
    modelsTextPrint[i].addEventListener("click", function() {
      printImg.style.background = "url(" + modelsTextPrint[i].src + ")";

      printImg.style.backgroundSize = "100%";
      printImg.style.backgroundRepeat = "no-repeat";
    });
  }
};

let drawTextPrint = function(cost) {
  for (let i = 0; i < modelsPrint.length; i++) {
    modelsPrint[i].addEventListener("click", function() {
      printImg.style.background = "url(" + modelsPrint[i].src + ")";
      printImg.style.backgroundSize = "100% 100%";
      printImg.style.backgroundRepeat = "no-repeat";
      printImg.style.filter = "0.8";
    });
  }
};

for (let i = 0; i < chooseModels.length; i++) {
  let count = 0;
  let price = document.querySelector("h3");
  let cost = 100;
  price.innerText = "price: " + cost + "$";

  let chooseFutbolka = function() {
    imgModels.setAttribute("src", "img/futbolka.jpg");
    imgModels.setAttribute("data-futbolka", "");
    nameModels.innerHTML = "футболка";
    printImg.style.top = "22%";
    printImg.style.left = "35%";
    imgModels.removeAttribute("data-tolstovka", "");
    imgModels.removeAttribute("data-tolstovkarear", "");
    cost += 100;
    price.innerText = "price: " + cost + "$";
    printImg.style.transform = "scale(0.8)";
  };

  chooseModels[1].addEventListener("click", function() {
    if (count < 2) {
      count++;
    }
    if (count == 2) {
      imgModels.setAttribute("src", "img/tolstovka.jpg");
      imgModels.setAttribute("data-tolstovka", "");
      imgModels.removeAttribute("data-futbolka", "");
      cost = 300;
      price.innerText = "price: " + cost + "$";
      printImg.style.top = "38%";
      printImg.style.left = "34%";
      printImg.style.transform = "scale(0.8)";
      nameModels.innerHTML = "толстовка";
    } else if (count == 1) {
      chooseFutbolka();
      imgModels.removeAttribute("data-tolstovka", "");
    }
  });

  chooseModels[0].addEventListener("click", function() {
    count--;
    if (count == 1) {
      chooseFutbolka();
      cost = 200;
      price.innerText = "price: " + cost + "$";
    } else if (count == 0) {
      imgModels.setAttribute("src", "img/maika.jpg");
      imgModels.removeAttribute("data-futbolka", "");
      imgModels.removeAttribute("data-tolstovka", "");
      cost = 100;
      price.innerText = "price: " + cost + "$";

      nameModels.innerText = "майка";
      printImg.style.top = "35%";
      printImg.style.left = "35.5%";
      printImg.style.transform = "scale(1)";
    }
    if (count < 0) {
      count = 0;
    }
  });
}

drawTextPrint();
drawImgPrint();
closeModal();
turnModels();

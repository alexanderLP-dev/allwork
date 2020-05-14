"use strict";

let sliderAbout = document.querySelector(".about_us_slider");
let sliderBody = sliderAbout.querySelector(".slider_body");
let sliderItem = sliderBody.querySelectorAll(".slider_item");
let btnPrev = sliderAbout.querySelector(".btn_prev");
let btnNext = sliderAbout.querySelector(".btn_next");

btnPrev.addEventListener("click", function (event) {
  for (let i = 0; i < sliderItem.length; i++) {
    sliderItem[i].style.transform = "translateX(0px)";
    sliderItem[i].style.transition = "0.3s";
  }

  // console.log(this);
});

let count = -282;

btnNext.addEventListener("click", function (event) {
  for (let i = 0; i < sliderItem.length; i++) {
    sliderItem[i].style.transform = "translateX(" + count + "px)";
    sliderItem[i].style.transition = "0.3s";
  }
  let lastEl = sliderItem.length - 1;
  if (count > -1425) {
    count -= 282;
  } else if (lastEl) {
    count = 0;
  }
  console.log(count, lastEl);
});

let sliderQuote = document.querySelector(".slider");
let partnerSliderItem = sliderQuote.querySelector(".partner_slider_item");
let sliderP = partnerSliderItem.querySelectorAll("p[data-hide]");

let switchQuotes = partnerSliderItem.querySelectorAll("i");
console.log(sliderP, switchQuotes);

for (let k = 0; k < switchQuotes.length; k++) {
  for (let j = 0; j < sliderP.length; j++) {
    switchQuotes[k].addEventListener("click", function () {
      if (k == 0) {
        sliderP[0].style.display = "block";
        sliderP[1].style.display = "none";
        sliderP[2].style.display = "none";
        switchQuotes[0].classList = "active";
        switchQuotes[1].classList = "";
        switchQuotes[2].classList = "";
      }
      if (k == 1) {
        sliderP[0].style.display = "none";
        sliderP[2].style.display = "none";
        sliderP[1].style.display = "block";
        switchQuotes[0].classList = "";
        switchQuotes[1].classList = "active";
        switchQuotes[2].classList = "";
      }
      if (k == 2) {
        sliderP[2].style.display = "block";
        sliderP[0].style.display = "none";
        sliderP[1].style.display = "none";
        switchQuotes[0].classList = "";
        switchQuotes[1].classList = "";
        switchQuotes[2].classList = "active";
      }
    });
  }
}

// ====================================================

let trig = document.querySelector("header");
let btnHome = document.querySelector(".home");

trig.addEventListener("mouseenter", function () {
  btnHome.style.opacity = 0;
  btnHome.style.transition = "0.3s";
});

trig.addEventListener("mouseleave", function () {
  btnHome.style.opacity = 1;
  btnHome.style.transition = "0.3s";
});

// ====================================================
let noSmallMenu = document.querySelector("body");
let smallMenu = document.querySelector(".small_menu");
let subMenu = smallMenu.querySelector("ul");
let mainMenu = smallMenu.querySelector("#menuString");
let arrowMenu = document.querySelector("#menuArrow");

subMenu.style.display = "none";

smallMenu.addEventListener("click", function (event) {
  // debugger;
  this.target = smallMenu;

  function openMenu() {
    subMenu.style.display = "block";
    smallMenu.classList.add("open");
    mainMenu.style.opacity = "0";
    arrowMenu.style.opacity = "1";
    console.log("HI");
  }

  let closeMenu = function () {
    subMenu.style.display = "none";
    arrowMenu.style.opacity = "0";
    mainMenu.style.opacity = "1";
    console.log("bye");
    smallMenu.classList.remove("open");
  };

  if (subMenu.style.display === "none") {
    openMenu();
  } else if (!event.target.focus()) {
    closeMenu();
  } else {
    closeMenu();
  }

  console.log(event, this.target, subMenu.style.display);
});

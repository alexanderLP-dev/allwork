"use strict";

let buttonsForGadget = document.querySelector(".icons-switch");
let btnSwitch = buttonsForGadget.querySelectorAll("i");

let allGadgets = document.querySelector(".placeholder-for-mip");
let gadget = allGadgets.querySelectorAll("img");

for (let i = 0, k = 0; i < btnSwitch.length, k < gadget.length; i++, k++) {
  btnSwitch[0].addEventListener("click", function (event) {
    event.preventDefault();

    btnSwitch[0].classList.add("active");
    btnSwitch[1].classList.remove("active");
    btnSwitch[2].classList.remove("active");
    gadget[1].setAttribute("hidden", "");
    gadget[2].removeAttribute("hidden", "");
    gadget[0].setAttribute("hidden", "");
  });

  btnSwitch[1].addEventListener("click", function (event) {
    event.preventDefault();
    btnSwitch[1].classList.add("active");
    btnSwitch[0].classList.remove("active");
    btnSwitch[2].classList.remove("active");
    gadget[0].setAttribute("hidden", "");
    gadget[1].removeAttribute("hidden", "");
    gadget[2].setAttribute("hidden", "");
  });

  btnSwitch[2].addEventListener("click", function (event) {
    event.preventDefault();
    btnSwitch[2].classList.add("active");
    btnSwitch[1].classList.remove("active");
    btnSwitch[0].classList.remove("active");
    gadget[1].setAttribute("hidden", "");
    gadget[0].removeAttribute("hidden", "");
    gadget[2].setAttribute("hidden", "");
  });
}

// ======= slider ===========

let sliderBody = document.querySelector(".container-for-img");
let slides = sliderBody.querySelectorAll("img");
let sliderDots = document.querySelector(".dots-for-slides");
let dots = sliderDots.querySelectorAll("p");

console.log(sliderDots);

for (let i = 0, k = 0; i < dots.length, k < slides.length; i++, k++) {
  let active = dots[i];
  slides[k].style.opacity = 0;
  slides[k].style.transition = "1s";
  slides[0].style.opacity = 1;
  dots[0].classList.add("active");

  active.addEventListener("click", function (event) {
    event.preventDefault();

    if (i >= [1]) {
      dots[i - 1].classList.remove("active");
      dots[i].classList.add("active");
      dots[0].classList.remove("active");
    } else if (i == [0]) {
      dots[dots.length - 1].classList.remove("active");
      dots[0].classList.add("active");
    }
    if (i < [dots.length - 1]) {
      dots[i + 1].classList.remove("active");
    }

    if (i == [0]) {
      dots[i + 1].classList.remove("active");
      dots[i + 2].classList.remove("active");
      dots[i + 3].classList.remove("active");
      dots[i + 4].classList.remove("active");
      slides[0].style.opacity = 1;
      slides[1].style.opacity = 0;
      slides[2].style.opacity = 0;
      slides[3].style.opacity = 0;
      slides[4].style.opacity = 0;
      slides[5].style.opacity = 0;
    }

    if (i == [1]) {
      dots[dots.length - 1].classList.remove("active");
      dots[i + 3].classList.remove("active");
      dots[i + 2].classList.remove("active");
      slides[0].style.opacity = 0;
      slides[1].style.opacity = 1;
      slides[2].style.opacity = 0;
      slides[3].style.opacity = 0;
      slides[4].style.opacity = 0;
      slides[5].style.opacity = 0;
    }

    if (i == [2]) {
      dots[i + 2].classList.remove("active");
      dots[dots.length - 1].classList.remove("active");
      slides[0].style.opacity = 0;
      slides[1].style.opacity = 0;
      slides[2].style.opacity = 1;
      slides[3].style.opacity = 0;
      slides[4].style.opacity = 0;
      slides[5].style.opacity = 0;
    }

    if (i == [3]) {
      dots[i - 2].classList.remove("active");
      dots[i + 2].classList.remove("active");
      slides[0].style.opacity = 0;
      slides[1].style.opacity = 0;
      slides[2].style.opacity = 0;
      slides[3].style.opacity = 1;
      slides[4].style.opacity = 0;
      slides[5].style.opacity = 0;
    }

    if (i == [4]) {
      dots[i - 2].classList.remove("active");
      dots[i + 1].classList.remove("active");
      dots[i - 3].classList.remove("active");
      slides[0].style.opacity = 0;
      slides[1].style.opacity = 0;
      slides[2].style.opacity = 0;
      slides[3].style.opacity = 0;
      slides[4].style.opacity = 1;
      slides[5].style.opacity = 0;
    }

    if (i == [dots.length - 1]) {
      dots[i - 1].classList.remove("active");
      dots[i - 2].classList.remove("active");
      dots[i - 3].classList.remove("active");
      dots[i - 4].classList.remove("active");
      slides[0].style.opacity = 0;
      slides[1].style.opacity = 0;
      slides[2].style.opacity = 0;
      slides[3].style.opacity = 0;
      slides[4].style.opacity = 0;
      slides[5].style.opacity = 1;
    }

    console.log(event.currentTarget, active);
  });
}

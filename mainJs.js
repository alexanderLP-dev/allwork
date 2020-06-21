"use strict";

let sliderItems = document.querySelector(".slider_items");
let items = sliderItems.querySelectorAll(" a");

let btn = document.querySelectorAll(".btn");

let currentSlide = 0;

function moveSlide() {
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
  items[currentSlide].style.display = "block";
}

moveSlide();

btn[0].addEventListener("click", function () {
  moveSlide();
  if (currentSlide == 0) {
    currentSlide = items.length - 1;
  } else {
    currentSlide--;
  }
});

btn[1].addEventListener("click", function (event) {
  event.preventDefault();
  moveSlide();
  // btn[1].style.transform = "translateX(5px)";

  if (currentSlide == items.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
});
function moveNext() {}

let moveBtn = function () {
  btn[1].style.transform = "translateX(10px)";
  btn[1].style.transition = "1s";
  btn[0].style.transform = "translateX(-10px)";
  btn[0].style.transition = "1s";
};
let backBtn = function () {
  btn[0].style.transform = "translateX(10px)";

  btn[1].style.transform = "translateX(-10px)";
};

let repeate = function () {
  setTimeout(moveBtn, 1000);
  setTimeout(backBtn, 1200);
};

let intervalId2 = setInterval(repeate, 5000);

let skillsIcons = document.querySelectorAll(".skills");
let skillsItem = document.querySelectorAll(".skills-item");

for (
  let i = 0, k = 0;
  i < skillsIcons.length, k < skillsItem.length;
  i++, k++
) {
  if (i > 0) {
    skillsItem[i].classList.add("hideSkill");
  }

  skillsIcons[i].onclick = function () {
    skillsItem[i].classList.remove("hideSkill");

    if ([i] > 0) {
      skillsItem[i - 1].classList.remove("activeSkill");
      skillsItem[i - 1].classList.add("hideSkill");
      skillsItem[0].classList.add("hideSkill");
    }
    if ([i] < skillsItem.length - 1) {
      skillsItem[i + 1].classList.remove("activeSkill");
      skillsItem[i + 1].classList.add("hideSkill");
      skillsItem[skillsItem.length - 1].classList.add("hideSkill");
    }
  };
}

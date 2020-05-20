"üse strict";

let sliderItems = document.querySelector(".slider_items");
let items = sliderItems.querySelectorAll("a");

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

btn[1].addEventListener("click", function () {
  moveSlide();
  if (currentSlide == items.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
});
function moveNext() {}
console.log(items);

// ===========================

let footerContact = document.querySelector(
  ".main_block_footer > .block_contact"
);
let headerContact = document.querySelector(".block_contact");

if (innerWidth < 1024) {
  headerContact.style.display = "none";
  footerContact.style.display = "block";
} else {
  headerContact.style.display = "block";
  footerContact.style.display = "none";
}

console.log(footerContact);

console.log(innerWidth);

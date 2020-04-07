"use strict";

// placeholder-user
// slider-text
// slider-dots
// slider-dots p

let userPicture = document.querySelector(".placeholder-user"),
  text = document.querySelector(".slider-text"),
  writeText =
    "I couldnt possibly use my own eyes" +
    "to look at the stars, thansk" +
    "Starnught App...",
  switcher = document.querySelector(".slider-dots"),
  pointer = switcher.querySelectorAll(".slider-dots p");
pointer[1].setAttribute("class", "checked");

let choosedPointer = function () {
  for (let k = 0; k < pointer.length; k++) {
    pointer[0].addEventListener("click", function () {
      pointer[0].setAttribute("class", "checked");
      pointer[1].removeAttribute("class", "checked");
      pointer[2].removeAttribute("class", "checked");
      userPicture.style.background =
        "url(img/user2.png) center / cover no-repeat";
      text.innerHTML = "bla bla bla";
    });

    pointer[1].addEventListener("click", function () {
      pointer[1].setAttribute("class", "checked");
      pointer[0].removeAttribute("class", "checked");
      pointer[2].removeAttribute("class", "checked");
      userPicture.style.background =
        "url(img/user.png) center / cover no-repeat";
      text.innerText = writeText;
    });

    pointer[2].addEventListener("click", function () {
      pointer[2].setAttribute("class", "checked");
      pointer[0].removeAttribute("class", "checked");
      pointer[1].removeAttribute("class", "checked");
      userPicture.style.background =
        "url(img/user3.png) center / cover no-repeat";
      text.innerText = "some text";

      console.log(pointer[k]);
    });
  }
};
choosedPointer();

// console.log(pointer);

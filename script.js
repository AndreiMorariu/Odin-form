"use strict";

const firstPassword = document.getElementById("password");
const secondPassword = document.getElementById("confirm_password");
const btn = document.querySelector("button");
const text = document.querySelector(".error");
const form = document.querySelector("form");

btn.addEventListener("click", function () {
  if (firstPassword.value != secondPassword.value) {
    firstPassword.style.border = "1px solid red";
    secondPassword.style.border = "1px solid red";
    text.style.opacity = 1;
  } else {
    firstPassword.style.border = "1px solid #e5e7eb";
    secondPassword.style.border = "1px solid #e5e7eb";
    text.style.opacity = 0;
    form.reset();
  }
});

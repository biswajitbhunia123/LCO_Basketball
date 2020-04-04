const signupModal = document.querySelector(".signup-form-wrapper");
const loginModal = document.querySelector(".login-form-wrapper");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const signupX = document.querySelector(".signup-x");
const loginX = document.querySelector(".login-x");
const formContainer = document.querySelector(".form-container");
const hamburger = document.querySelector(".hamburger");
const closebtn = document.querySelector(".closebtn");

signupBtn.addEventListener("click", () => {
  signupModal.classList.add("display");
  formContainer.classList.add("disable");
});

loginBtn.addEventListener("click", () => {
  loginModal.classList.add("display");
  formContainer.classList.add("disable");
});

loginX.addEventListener("click", () => {
  loginModal.classList.remove("display");
  formContainer.classList.remove("disable");
});

signupX.addEventListener("click", () => {
  signupModal.classList.remove("display");
  formContainer.classList.remove("disable");
});

hamburger.addEventListener("click", openNav);
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
closebtn.addEventListener("click", closeNav);
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

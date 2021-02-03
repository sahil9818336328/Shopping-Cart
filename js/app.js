// get elements

const hamburger = document.querySelector(".btn-container");
const nav = document.querySelector(".nav");
const sidenav = document.querySelector(".sidenav");
const closeBtn = document.querySelector(".cross");
hamburger.addEventListener("click", () => {
  if (sidenav.classList.contains("show")) {
    sidenav.classList.remove("show");
  } else {
    sidenav.classList.add("show");
  }
});
closeBtn.addEventListener("click", () => {
  sidenav.classList.remove("show");
});

// get elements

const hamburger = document.querySelector(".btn-container");
const nav = document.querySelector(".nav");
const sidenav = document.querySelector(".sidenav");
const closeBtn = document.querySelector(".cross");
const grid = document.querySelector(".grid");
const imageSlides = document.querySelectorAll(".image-item");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const shopbtn1 = document.querySelector(".shopbtn-1");
const popUp = document.querySelector(".pop-up");
const imgDesc = document.querySelector(".img-desc");

// toggling
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

// carousel

const nextSlide = () => {
  const getItem = document.querySelector(".active");
  // console.log(getItem);
  getItem.classList.remove("active");
  if (getItem.nextElementSibling) {
    getItem.nextElementSibling.classList.add("active");
  } else {
    imageSlides[0].classList.add("active");
  }
};
const previousSlide = () => {
  const getItem = document.querySelector(".active");
  // console.log(getItem);
  getItem.classList.remove("active");
  if (getItem.previousElementSibling) {
    getItem.previousElementSibling.classList.add("active");
  } else {
    imageSlides[imageSlides.length - 1].classList.add("active");
  }
};
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", previousSlide);

shopbtn1.addEventListener("click", () => {
  popUp.classList.add("pop-up-visibility");
  if (popUp.classList.contains("pop-up-visibility"))
    imgDesc.style.display = "none";
});

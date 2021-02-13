const cartBtn = document.querySelector("#cart-btn-main");
const cart = document.querySelector(".cart");
const cartCross = document.querySelector("#cart-cross");

cartBtn.addEventListener("click", () => {
  cart.classList.add("show-cart");
});
cartCross.addEventListener("click", () => {
  cart.classList.remove("show-cart");
});

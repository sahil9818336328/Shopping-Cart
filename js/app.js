// get elements

const hamburger = document.querySelector(".btn-container");
const nav = document.querySelector(".nav");
const sidenav = document.querySelector(".sidenav");
const closeBtn = document.querySelector(".cross");
const grid = document.querySelector(".grid");
const imageSlides = document.querySelectorAll(".image-item");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

window.addEventListener("DOMContentLoaded", showItems);
let carouselItems = [
  {
    id: 1,
    imgTitle: "Denim Jacket 1",
    imgPrice: "$10",
    subTotal: "$10",
    brand: "Denim",
    ProductType: "Jacket",
    Availability: "In Stock (2 items)",
    img: "./images/hero-1.jpg",
  },
  {
    id: 2,
    imgTitle: "Denim Jacket 2",
    imgPrice: "$20",
    subTotal: "$20",
    brand: "Polo",
    ProductType: "Jacket",
    Availability: "In Stock (3 items)",
    img: "./images/hero-2.jpg",
  },
  {
    id: 3,
    imgTitle: "Denim Jacket 3",
    imgPrice: "$30",
    subTotal: "$30",
    brand: "Gucci",
    ProductType: "Jacket",
    Availability: "In Stock (5 items)",
    img: "./images/hero-3.jpg",
  },
  {
    id: 4,
    imgTitle: "Denim Jacket 4",
    imgPrice: "$40",
    subTotal: "$40",
    brand: "Puma",
    ProductType: "Jacket",
    Availability: "In Stock (4 items)",
    img: "./images/hero-4.jpg",
  },
  {
    id: 5,
    imgTitle: "Denim Jacket 5",
    imgPrice: "$50",
    subTotal: "$50",
    brand: "Nike",
    ProductType: "Jacket",
    Availability: "In Stock (1 item)",
    img: "./images/hero-5.jpg",
  },
];

function showItems() {
  let displayCarouselItems = carouselItems.map((item) => {
    // console.log(item);
    return `  <div class="pop-up grid-1">
          <div class="pop-image">
              <img src="${item.img}" alt="">
              <div class="buttons-one">
                <a href="#"> <i class="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart</a>
              <a href="#"> <i class="fa fa-credit-card" aria-hidden="true"></i> Buy Now</a>
              </div>
            </div>
          <div class="pop-info">
            <div class="close-cart-container">
               <h2>${item.imgTitle} </h2>
               <span class="close-cart"><a href="#">&#10006</a></span>
            </div>
           
            <p>${item.imgPrice} (100% OFF)</p> 
            <a href=""><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i></a><Span>3 reviews</Span>
            <hr class="grey">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit corrupti eius esse praesentium nostrum quas at illo distinctio nemo. Voluptate iure sint, eligendi ex laudantium dicta eaque voluptatibus natus.</p>
            <form class="cart">
              <label >Color :</label>
              <select >
                <option value="red">red</option>
                <option value="black">black</option>
              </select>
              <label >Size :</label>
              <select >
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            </form>
            <ul class="cart-info-nav">
              <li class="cart-info-item">Quantity :</li>
              <div class="buttons">
              <button type="button"><i class="fa fa-minus" aria-hidden="true"></i></button><span>1</span><button type="button"><i class="fa fa-plus" aria-hidden="true"></i></button></div>
              <li class="cart-info-item" id="unique">Subtotal: ${item.subTotal}</li>
              <li class="cart-info-item">Brand: ${item.brand}</li>
              <li class="cart-info-item">Product Type: ${item.ProductType}</li>
              <li class="cart-info-item">  Availability: <span style="color: green; cursor: pointer;">${item.Availability}</span></li>
            </ul>
            <div class="cart-contact">
              <div><i class="fa fa-star" aria-hidden="true"></i>Size guide</div>
              <div><i class="fa fa-truck" aria-hidden="true"></i>Shipping</div>
              <div><i class="fa fa-envelope" aria-hidden="true"></i>Queries</div>
            </div>
          </div>
      </div>`;
  });

  const imgDesc = document.querySelector(".img-desc");
  let results = document.querySelector(".results");
  let tempArray = displayCarouselItems;

  //converting array to string
  displayCarouselItems = displayCarouselItems.join("");
  // console.log(displayCarouselItems);
  results.innerHTML = displayCarouselItems;

  const shopbtn1 = document.querySelector(".shopbtn-1");
  const popUp = document.querySelector(".pop-up");
  const closecart = document.querySelector(".close-cart");

  // displaying the popup on click,making carousel buttons disabled
  shopbtn1.addEventListener("click", () => {
    popUp.classList.add("pop-up-visibility");
    if (popUp.classList.contains("pop-up-visibility")) {
      imgDesc.style.display = "none";
      nextBtn.classList.add("not-active");
      prevBtn.classList.add("not-active");
    }
  });

  // closing the popup and making carousel buttons active
  closecart.addEventListener("click", () => {
    if (popUp.classList.contains("pop-up-visibility")) {
      popUp.classList.remove("pop-up-visibility");
      imgDesc.style.display = "block";
      nextBtn.classList.remove("not-active");
      prevBtn.classList.remove("not-active");
    }
  });

  // carousel
  let itemNo = 0;

  // function for next slide
  const nextSlide = () => {
    const getItem = document.querySelector(".active");
    // console.log(getItem);
    getItem.classList.remove("active");
    if (getItem.nextElementSibling) {
      getItem.nextElementSibling.classList.add("active");

      itemNo++;
      tempArray = tempArray[itemNo];

      console.log(tempArray);
      // let tempitems = results.querySelectorAll(".pop-up");
      // console.log(tempitems);
      // tempitems = tempitems[itemNo];
      // console.log(tempitems);
      results.innerHTML = tempArray;
    } else {
      imageSlides[0].classList.add("active");
    }
  };

  // function for previous slide
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
}

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

// get elements

const hamburger = document.querySelector(".btn-container");
const nav = document.querySelector(".nav");
const sidenav = document.querySelector(".sidenav");
const closeBtn = document.querySelector(".cross");
const grid = document.querySelector(".grid");
const imageSlides = document.querySelectorAll(".image-item");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const imageContainer = document.querySelector(".image-container");
const subscribe = document.querySelector(".subscribe");
const subscribeClose = document.querySelector(".subscribe-close");
const navbar = document.querySelector("nav");
const toTop = document.querySelector(".topLink");
const autofit = document.querySelector(".autofit");
const btnContainer = document.querySelector(".btn-container-1");
const carouselSlides = document.querySelectorAll(".imageCarouselContainer");
const circle = document.querySelectorAll(".circle");

let intervalTime;
let time = 3000;
let check = true;

window.addEventListener("DOMContentLoaded", showItems);
window.addEventListener("DOMContentLoaded", () => {
  displayCategoryItems(slideItems);
  displayButtons();
});
let carouselItems = [
  {
    id: 0,
    imgTitle: "Denim Jackets 1",
    imgPrice: "$10",
    subTotal: "$10",
    brand: "Denim",
    ProductType: "Jacket",
    Availability: "In Stock (2 items)",
    img: "./images/hero-1.jpg",
  },
  {
    id: 1,
    imgTitle: "Denim Jacket 2",
    imgPrice: "$20",
    subTotal: "$20",
    brand: "Polo",
    ProductType: "Jacket",
    Availability: "In Stock (3 items)",
    img: "./images/hero-2.jpg",
  },
  {
    id: 2,
    imgTitle: "Denim Jacket 3",
    imgPrice: "$30",
    subTotal: "$30",
    brand: "Gucci",
    ProductType: "Jacket",
    Availability: "In Stock (5 items)",
    img: "./images/hero-3.jpg",
  },
  {
    id: 3,
    imgTitle: "Denim Jacket 4",
    imgPrice: "$40",
    subTotal: "$40",
    brand: "Puma",
    ProductType: "Jacket",
    Availability: "In Stock (4 items)",
    img: "./images/hero-4.jpg",
  },
  {
    id: 4,
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
    clearInterval(intervalTime);
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
      intervalTime = setInterval(nextSlide, time);
    }
  });

  // carousel

  // function for next slide
  const nextSlide = () => {
    const getItem = document.querySelector(".active");
    // console.log(getItem);
    getItem.classList.remove("active");
    if (getItem.nextElementSibling) {
      getItem.nextElementSibling.classList.add("active");
      nextSlideTwo();
    } else {
      imageSlides[0].classList.add("active");
      nextSlideTwo();
    }
    // reset interval time if a user moves to next slide
    if (check) {
      clearInterval(intervalTime);
      intervalTime = setInterval(nextSlide, time);
    }
  };
  // auto slide
  if (check) {
    intervalTime = setInterval(nextSlide, time);
  }

  // function for previous slide
  const previousSlide = () => {
    const getItem = document.querySelector(".active");
    // console.log(getItem);
    getItem.classList.remove("active");
    if (getItem.previousElementSibling) {
      getItem.previousElementSibling.classList.add("active");
      itemNo--;
      previousSlideTwo();
    } else {
      imageSlides[imageSlides.length - 1].classList.add("active");
      itemNo = imageSlides.length - 1;
      previousSlideTwo();
    }
    // reset interval time if a user moves to previous slide
    if (check) {
      clearInterval(intervalTime);
      intervalTime = setInterval(nextSlide, time);
    }
  };

  // event handlers for next and prev buttons
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", previousSlide);
}

// Basically working with the DOM from here...
let itemNo = 0;
function nextSlideTwo() {
  itemNo++;

  let getItemsFromDom = document.querySelector(".results");
  if (itemNo >= getItemsFromDom.children.length) {
    itemNo = 0;
  }
  let getCurrentActiveItem = document.querySelector(".active");
  let buttonOfCurrentItem = getCurrentActiveItem.querySelector(".shopbtn-1");
  let getImageDescOfCurrentItem = getCurrentActiveItem.querySelector(
    ".img-desc"
  );
  let closeBtnFromCurrentPopup = getItemsFromDom.children[itemNo].querySelector(
    ".close-cart"
  );

  // console.log(getItemsFromDom);

  buttonOfCurrentItem.addEventListener("click", () => {
    clearInterval(intervalTime);

    getItemsFromDom.children[itemNo].classList.add("pop-up-visibility");
    if (
      getItemsFromDom.children[itemNo].classList.contains("pop-up-visibility")
    ) {
      getImageDescOfCurrentItem.style.display = "none";
      closeBtnFromCurrentPopup.addEventListener("click", () => {
        if (
          getItemsFromDom.children[itemNo].classList.contains(
            "pop-up-visibility"
          )
        ) {
          getItemsFromDom.children[itemNo].classList.remove(
            "pop-up-visibility"
          );

          getImageDescOfCurrentItem.style.display = "block";
          nextBtn.classList.remove("not-active");
          prevBtn.classList.remove("not-active");
          if (check) {
            intervalTime = setInterval(() => {
              const getItem = document.querySelector(".active");
              // console.log(getItem);
              getItem.classList.remove("active");
              if (getItem.nextElementSibling) {
                getItem.nextElementSibling.classList.add("active");
                nextSlideTwo();
              } else {
                imageSlides[0].classList.add("active");
                nextSlideTwo();
              }
            }, time);
          }
        }
      });

      nextBtn.classList.add("not-active");
      prevBtn.classList.add("not-active");
    }
  });
}

function previousSlideTwo() {
  // itemNo--;
  let getItemsFromDom = document.querySelector(".results");
  // console.log(getItemsFromDom);
  let getCurrentActiveItem = document.querySelector(".active");
  // console.log(getCurrentActiveItem);
  let buttonOfCurrentItem = getCurrentActiveItem.querySelector(".shopbtn-1");
  // console.log(buttonOfCurrentItem);
  let getImageDescOfCurrentItem = getCurrentActiveItem.querySelector(
    ".img-desc"
  );
  // console.log(getImageDescOfCurrentItem);
  let closeBtnFromCurrentPopup = getItemsFromDom.children[itemNo].querySelector(
    ".close-cart"
  );

  // console.log(closeBtnFromCurrentPopup);

  buttonOfCurrentItem.addEventListener("click", () => {
    clearInterval(intervalTime);

    getItemsFromDom.children[itemNo].classList.add("pop-up-visibility");

    if (
      getItemsFromDom.children[itemNo].classList.contains("pop-up-visibility")
    ) {
      getImageDescOfCurrentItem.style.display = "none";
      closeBtnFromCurrentPopup.addEventListener("click", () => {
        if (
          getItemsFromDom.children[itemNo].classList.contains(
            "pop-up-visibility"
          )
        ) {
          getItemsFromDom.children[itemNo].classList.remove(
            "pop-up-visibility"
          );
          getImageDescOfCurrentItem.style.display = "block";
          nextBtn.classList.remove("not-active");
          prevBtn.classList.remove("not-active");
          if (check) {
            intervalTime = setInterval(() => {
              const getItem = document.querySelector(".active");
              // console.log(getItem);
              getItem.classList.remove("active");
              if (getItem.nextElementSibling) {
                getItem.nextElementSibling.classList.add("active");
                nextSlideTwo();
              } else {
                imageSlides[0].classList.add("active");
                nextSlideTwo();
              }
            }, time);
          }
        }
      });

      nextBtn.classList.add("not-active");
      prevBtn.classList.add("not-active");
    }
  });
}
// working with the DOM finished.....

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

// Subscribe
setTimeout(() => {
  subscribe.classList.add("subscribe-visible");
}, 5000);
subscribeClose.addEventListener("click", () => {
  subscribe.classList.remove("subscribe-visible");
});

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    toTop.classList.add("show-link");
  } else {
    toTop.classList.remove("show-link");
  }
});

const slideItems = [
  {
    id: 1,
    title: "Pepe jeans",
    img: "./images/img-1.png",
    category: "Jeans",
    price: "$50",
  },
  {
    id: 2,
    title: "US POLO ASSN.",
    img: "./images/item-2.png",
    category: "Jackets",
    price: "$40",
  },
  {
    id: 3,
    title: "Denim",
    img: "./images/img-4.png",
    category: "Shirts",
    price: "$30",
  },
  {
    id: 4,
    title: "Kappa",
    img: "./images/img-6.png",
    category: "Caps",
    price: "$20",
  },
  {
    id: 5,
    title: "Denim",
    img: "./images/item-1.png",
    category: "Jackets",
    price: "$50",
  },
  {
    id: 6,
    title: "Pepe Jeans",
    img: "./images/slide-1.png",
    category: "Jeans",
    price: "$50",
  },
  {
    id: 7,
    title: "Denim shirt",
    img: "./images/slide-2.png",
    category: "Shirts",
    price: "$40",
  },
  {
    id: 8,
    title: "Nike cap",
    img: "./images/slide-3.png",
    category: "Caps",
    price: "$30",
  },
  {
    id: 9,
    title: "Leather jacket",
    img: "./images/slide-4.png",
    category: "Jackets",
    price: "$20",
  },
  {
    id: 10,
    title: "Nike shoes",
    img: "./images/random-11.png",
    category: "Shoes",
    price: "$40",
  },
  {
    id: 11,
    title: "Pepe Jeans",
    img: "./images/slide-5.png",
    category: "Jeans",
    price: "$30",
  },
  {
    id: 12,
    title: "Denim Shirt",
    img: "./images/slide-6.png",
    category: "Shirts",
    price: "$20",
  },
  {
    id: 13,
    title: "Nike shoes",
    img: "./images/random-12.png",
    category: "Shoes",
    price: "$30",
  },
  {
    id: 14,
    title: "Reebok cap",
    img: "./images/slide-7.png",
    category: "Caps",
    price: "$10",
  },
  {
    id: 15,
    title: "Brown Leather",
    img: "./images/slide-8.png",
    category: "Jackets",
    price: "$30",
  },
  {
    id: 16,
    title: "Pepe Jeans",
    img: "./images/slide-9.png",
    category: "Jeans",
    price: "$20",
  },
  {
    id: 17,
    title: "Denim Jeans",
    img: "./images/slide-10.png",
    category: "Jeans",
    price: "$25",
  },
  {
    id: 18,
    title: "Reebok shirt",
    img: "./images/slide-11.png",
    category: "Shirts",
    price: "$30",
  },
  {
    id: 19,
    title: "Nike shirt",
    img: "./images/slide-12.png",
    category: "Shirts",
    price: "$20",
  },
  {
    id: 20,
    title: "Nike shoes",
    img: "./images/slide-13.png",
    category: "Shoes",
    price: "$20",
  },
  {
    id: 19,
    title: "Nike shoes",
    img: "./images/slide-14.png",
    category: "Shoes",
    price: "$20",
  },
  {
    id: 19,
    title: "Nike shoes",
    img: "./images/slide-15.png",
    category: "Shoes",
    price: "$20",
  },
  {
    id: 20,
    title: "Puma cap",
    img: "./images/slide-16.png",
    category: "Caps",
    price: "$10",
  },
  {
    id: 21,
    title: "Nike cap",
    img: "./images/slide-17.png",
    category: "Caps",
    price: "$15",
  },
  {
    id: 22,
    title: "Reebok cap",
    img: "./images/slide-18.png",
    category: "Caps",
    price: "$10",
  },
];

function displayCategoryItems(menuItems) {
  let displayCategoryArray = menuItems.map((item) => {
    return `<div class="item-slide-1"> 
      <img src="${item.img}" alt="">
      <h3>${item.title}</h3>
      <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i>
      <p>${item.price}</p>
      <a href="javascript:function f(e){e.preventDefault();}">ADD TO CART</a>
    </div>`;
  });
  displayCategoryArray = displayCategoryArray.join("");
  // console.log(displayCategoryArray);
  autofit.innerHTML = displayCategoryArray;
}

function displayButtons() {
  //adding different category will display a separate button for that catogory.

  let uniqueCategories = slideItems.reduce(
    (total, cValue) => {
      if (!total.includes(cValue.category)) {
        total.push(cValue.category);
      }
      return total;
      // console.log(cValue);
    },
    ["all"]
  );
  // console.log(uniqueCategories); returns an array with different button categories.

  let categoryBtn = uniqueCategories.map((itemCategory) => {
    return `<button type="button" class="unique-btn" data-id=${itemCategory}>
          ${itemCategory}
        </button>`;
  });
  categoryBtn = categoryBtn.join("  ");
  btnContainer.innerHTML = categoryBtn;
  // console.log(categoryBtn);

  const getAllButtons = btnContainer.querySelectorAll(".unique-btn");
  // console.log(getAllButtons);
  getAllButtons.forEach((btn) => {
    // console.log(item);
    btn.addEventListener("click", (e) => {
      const buttonCategory = e.currentTarget.dataset.id;
      const slideItemsCategory = slideItems.filter((menuItem) => {
        if (menuItem.category === buttonCategory) {
          return menuItem;
        }
      });
      // console.log(slideItemsCategory);
      if (buttonCategory === "all") {
        displayCategoryItems(slideItems);
      } else {
        displayCategoryItems(slideItemsCategory);
      }
    });
  });
}

// Carousel
const circleContainer = document.querySelector(".circle-container");
circleContainer.addEventListener("click", (e) => {
  // removing active class from all buttons
  circle.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
  // adding active class to the current button
  e.target.classList.add("active-btn");

  const btnid = e.target.dataset.id;
  // console.log(btnid);
  const element = document.getElementById(btnid);
  // console.log(element);
  carouselSlides.forEach((item) => {
    // console.log(item);
    if (e.target.dataset.id) {
      item.classList.remove("active-1");
      if (btnid === element.getAttribute("id")) {
        element.classList.add("active-1");
      }
    }
  });
});

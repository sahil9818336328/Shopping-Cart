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
      <a href="javascript:function f(e){e.preventDefault();}" class="addToCart">ADD TO CART</a>
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

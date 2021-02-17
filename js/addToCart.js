window.addEventListener("DOMContentLoaded", () => {
  const getAllButtons = btnContainer.querySelectorAll(".unique-btn");
  // console.log(getAllButtons);
  // if in case we filter items / for accessing the buttons ...
  getAllButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const addToCartBtnTwo = document.querySelectorAll(".addToCart");
      addToCartBtnTwo.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          let fullPathTwo = e.target.parentElement.children[0].src;
          // console.log(fullPathTwo);
          let positionTwo = fullPathTwo.indexOf("images");
          // console.log(positionTwo);
          let partialPathTwo = fullPathTwo.slice(positionTwo);
          // console.log(partialPathTwo);
          let cartItemsTwo = {};
          cartItemsTwo.img = `${partialPathTwo}`;
          // console.log(cartItemsTwo);
          let itemNameTwo = e.target.parentElement.children[1].textContent;
          // console.log(itemNameTwo);
          cartItemsTwo.name = itemNameTwo;

          let itemPriceTwo = e.target.previousElementSibling.textContent;

          let finalPriceTwo = itemPriceTwo.slice(1).trim();
          // console.log(itemPriceTwo);
          cartItemsTwo.price = finalPriceTwo;
          // console.log(cartItemsTwo);

          const cartItemTwo = document.createElement("div");
          cartItemTwo.className = "cart-content";

          // console.log(cartItem);
          cartItemTwo.innerHTML = `
       <img src="${cartItemsTwo.img}" id="item-img">
      <div class="item-info">
        <p id="cart-item-title">${cartItemsTwo.name} </p>
      
      <span id="cart-item-price">$ ${cartItemsTwo.price}</span>
      </div>
      
      <a href="javascript:function f(e){e.preventDefault();}" id='cart-item-remove'>
              <i class="fas fa-trash fa-2x"></i>
      </a>`;

          const totalContainer = document.querySelector(
            ".cart-total-container"
          );
          alertify.alert("Item was added successfully").set({ title: "DONE" });
          cart.insertBefore(cartItemTwo, totalContainer);

          showTotals();

          // remove item
          const getTrashBtn = document.querySelectorAll("#cart-item-remove");
          // console.log(getTrashBtn);
          getTrashBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
              const element = e.target.parentElement.parentElement;
              // console.log(element);
              cart.removeChild(element);
              alertify
                .alert("Item removed from the cart")
                .set({ title: "DONE" });
              showTotals();
            });
          });
        });
      });
    });
  });

  // if we dont filter the items then ..

  const addToCartBtn = document.querySelectorAll(".addToCart");
  // console.log(addToCartBtn);
  addToCartBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let fullPath = e.target.parentElement.children[0].src;
      // console.log(fullPath);
      let position = fullPath.indexOf("images");
      // console.log(position);
      let partialPath = fullPath.slice(position);
      // console.log(partialPath);
      let cartItems = {};
      cartItems.img = `${partialPath}`;
      // console.log(cartItems);
      let itemName = e.target.parentElement.children[1].textContent;
      // console.log(itemName);
      cartItems.name = itemName;

      let itemPrice = e.target.previousElementSibling.textContent;

      let finalPrice = itemPrice.slice(1).trim();
      // console.log(itemPrice);
      cartItems.price = finalPrice;
      // console.log(cartItems);

      const cartItem = document.createElement("div");
      cartItem.className = "cart-content";

      // console.log(cartItem);
      cartItem.innerHTML = `
       <img src="${cartItems.img}" id="item-img">
      <div class="item-info">
        <p id="cart-item-title">${cartItems.name} </p>
      
      <span id="cart-item-price">$ ${cartItems.price}</span>
      </div>
      
      <a href="javascript:function f(e){e.preventDefault();}" id='cart-item-remove'>
              <i class="fas fa-trash fa-2x"></i>
      </a>`;

      const totalContainer = document.querySelector(".cart-total-container");
      alertify.alert("Item was added successfully").set({ title: "DONE" });
      cart.insertBefore(cartItem, totalContainer);

      showTotals();

      // remove item
      const getTrashBtn = document.querySelectorAll("#cart-item-remove");
      // console.log(getTrashBtn);
      getTrashBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const element = e.target.parentElement.parentElement;
          // console.log(element);
          cart.removeChild(element);
          alertify.alert("Item removed from the cart").set({ title: "DONE" });
          showTotals();
        });
      });
    });
  });

  // clear the cart
  clearCart.addEventListener("click", () => {
    const items = document.querySelectorAll(".cart-content");
    items.forEach((item) => {
      cart.removeChild(item);
    });

    alertify.alert("Cart is cleared").set({ title: "DONE" });

    showTotals();
  });

  // update cart info
  function showTotals() {
    // console.log("testing");
    const totalMoney = [];
    const items = document.querySelectorAll("#cart-item-price");
    // console.log(items);
    items.forEach((item) => {
      totalMoney.push(parseInt(item.textContent.slice(1).trim()));
    });
    // console.log(totalMoney);
    const finaTotalMoney = totalMoney.reduce((total, Cvalue) => {
      total += Cvalue;
      return total;
    }, 0);
    // console.log(finaTotalMoney);
    const cartTotal = document.querySelector("#cart-total");
    cartTotal.textContent = finaTotalMoney;
    const itemCount = document.querySelector(".items");
    itemCount.textContent = totalMoney.length;
    const count = document.querySelector("#itemCount");
    count.textContent = totalMoney.length;
  }
});

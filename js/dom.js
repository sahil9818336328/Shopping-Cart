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

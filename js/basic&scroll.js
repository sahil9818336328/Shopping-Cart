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

// scroll links section
const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // console.log(element);
    const navHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    sidenav.classList.remove("show");
  });
});

// show cart
cartBtn.addEventListener("click", () => {
  cart.classList.add("show-cart");
});
// close cart
cartCross.addEventListener("click", () => {
  cart.classList.remove("show-cart");
});

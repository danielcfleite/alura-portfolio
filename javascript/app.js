let firstclick = false;
let lastScrollTop = 0;
const hiddeTrigger = document.getElementById("navbar__menu__close");
const hideIcon = document.getElementById("hiddeButton");
const hideText = document.getElementById("hideText");
const navbar = document.getElementById("navbar");
const content = document.getElementById("apresentacao");
const footer = document.getElementById("footer");

hiddeTrigger.addEventListener("mouseover", () => {
  hideIcon.classList.remove("bi-arrow-up-circle");
  hideIcon.classList.add("bi-arrow-up-circle-fill");
  hideIcon.classList.add("shinning");
  hideText.classList.add("transparent");
});
hiddeTrigger.addEventListener("mouseout", () => {
  hideIcon.classList.remove("bi-arrow-up-circle-fill");
  hideIcon.classList.add("bi-arrow-up-circle");
  hideIcon.classList.remove("shinning");
  hideText.classList.remove("transparent");
});

hiddeTrigger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("transparent");
  if (firstclick === false) {
    hideIcon.style.transform = "rotate(180deg)";
    hideText.innerHTML = "Mostrar";
    content.style.margin = "0%";
    content.style.paddingTop = "0%";
    content.style.transition = "0.8s";
    firstclick = true;
  } else {
    hideIcon.style.transform = "rotate(0deg)";
    hideText.innerHTML = "Esconder";
    content.style.paddingTop = "5%";
    firstclick = false;
  }
});

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  } else if (window.scrollBy(0, -1)) {
    footer.classList.remove("footer");
    footer.classList.add("footer-scrolled");
  }
};

window.onscroll = function () {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (
    window.innerHeight + Math.ceil(window.pageYOffset) >=
    document.body.offsetHeight
  ) {
    footer.classList.remove("footer-scrolled");
    footer.classList.add("footer");
  } else if (
    window.innerHeight + Math.ceil(window.pageYOffset) <=
    document.body.offsetHeight
  ) {
    footer.classList.remove("footer");
    footer.classList.add("footer-scrolled");
  }
};

document.getElementById("button-about").onclick = function () {
  location.href = "/about.html";
};

// mobile menu
const btn = document.querySelector("#btn");
const item = document.querySelectorAll(".menu__item");

let showCard = (event) => {
  btn.classList.toggle("is-rotate");
  for (var i = 0; i < item.length; i++) {
    item[i].classList.toggle(`item-${i}`);
  }
};

btn.addEventListener("click", showCard);
// ...

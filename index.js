const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const overlay = document.querySelector("#overlay");
const greyTog = document.querySelector(".cbx");
const page = document.querySelector("body");

//opens and closes sidebar menu
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "inline";
    overlay.classList.remove("on");
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "inline";
    menuIcon.style.display = "none";
    overlay.classList.add("on");
  }
}

//closes sidebar menu
function closeMenu() {
  menu.classList.remove("showMenu");
  closeIcon.style.display = "none";
  menuIcon.style.display = "inline";
  overlay.classList.remove("on");
}

// closes sidebar menu on click outside of sidebar menu
window.addEventListener("click", (e) => {
  if (menu.classList.contains("showMenu")) {
    if (e.target === overlay) {
      closeMenu();
    }
  }
});

// closes sidebar menu on "Escape" keypress and removes focus from menu button
window.addEventListener("keydown", (e) => {
  console.log(e);
  if (menu.classList.contains("showMenu")) {
    if (e.code === "Escape") {
      closeMenu();
      hamburger.blur();
    }
  }
});

//toggles menu open/close on click of menu button
hamburger.addEventListener("click", toggleMenu);

//closes sidebar menu on click of different webpage
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

//turns on/off greyscale
greyTog.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("#header").classList.add("grey");
    document.querySelector("#main").classList.add("grey");
  } else {
    document.querySelector("#header").classList.remove("grey");
    document.querySelector("#main").classList.remove("grey");
  }
});

// carousel automatic navigation
let counter = 1;
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 4000);

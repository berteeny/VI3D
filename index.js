const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const overlay = document.querySelector("#overlay");
const greyTog = document.querySelector(".cbx");
const page = document.querySelector("body");

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

function closeMenu() {
  menu.classList.remove("showMenu");
  closeIcon.style.display = "none";
  menuIcon.style.display = "inline";
  overlay.classList.remove("on");
}

window.addEventListener("click", (e) => {
  if (menu.classList.contains("showMenu")) {
    if (e.target === overlay) {
      closeMenu();
    }
  }
});

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

greyTog.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("#header").classList.add("grey");
    document.querySelector("#main").classList.add("grey");
  } else {
    document.querySelector("#header").classList.remove("grey");
    document.querySelector("#main").classList.remove("grey");
  }
});

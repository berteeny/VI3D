const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const overlay = document.querySelector("#overlay");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    overlay.classList.remove("on");
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    overlay.classList.add("on");
  }
}

function toggle2() {
  menu.classList.toggle("showMenu");
  overlay.classList.toggle("on");
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

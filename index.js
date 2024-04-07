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

greyTog.addEventListener("change", function() {
  if (this.checked) {
    document.querySelector("#header").classList.add("grey");
    document.querySelector("#main").classList.add("grey");
  } else {
    document.querySelector("#header").classList.remove("grey");
    document.querySelector("#main").classList.remove("grey");
  }
});

// keep checkboxes checked

// const checkboxValues = JSON.parse(localStorage.getItem("checkboxValues")) || {};
//  document.querySelector(checkboxes = document.querySelector(("#checkbox-container :checkbox")));

//  $checkboxes.on("change", function(){
//   $checkboxes.each(function(){
//     checkboxValues[this.id] = this.checked;
//   });
//   localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
// });


// // On page load
// $.each(checkboxValues, function(key, value) {
//   $("#" + key).prop('checked', value);
// });

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
var merker = document.querySelector(".merker");
var items = document.querySelectorAll("ul li a");
function indicator(e) {
  merker.style.left = e.offsetLeft + "px";
  merker.style.width = e.offsetWidth + "px";
}
items.forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    indicator(e.target);
  });
});
// side menu toggle btn
var toggle_btn = document.querySelector(".toggle_btn");
var header = document.querySelector("header");
toggle_btn.addEventListener("click", function () {
  header.classList.toggle("side_menu_active");
});

// banner slider code start here
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

next.addEventListener("click", function () {
  if (
    document.getElementsByClassName("slider")[0].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[0].classList.remove("active");
    document.getElementsByClassName("slider")[1].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[1].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[1].classList.remove("active");
    document.getElementsByClassName("slider")[2].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[2].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[2].classList.remove("active");
    document.getElementsByClassName("slider")[3].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[3].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[3].classList.remove("active");
    document.getElementsByClassName("slider")[4].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[4].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[4].classList.remove("active");
    document.getElementsByClassName("slider")[0].classList.add("active");
  }
});

prev.addEventListener("click", function () {
  if (
    document.getElementsByClassName("slider")[4].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[4].classList.remove("active");
    document.getElementsByClassName("slider")[3].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[3].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[3].classList.remove("active");
    document.getElementsByClassName("slider")[2].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[2].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[2].classList.remove("active");
    document.getElementsByClassName("slider")[1].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[1].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[1].classList.remove("active");
    document.getElementsByClassName("slider")[0].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[0].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[0].classList.remove("active");
    document.getElementsByClassName("slider")[4].classList.add("active");
  }
});

function autoplaySlider() {
  if (
    document.getElementsByClassName("slider")[0].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[0].classList.remove("active");
    document.getElementsByClassName("slider")[1].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[1].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[1].classList.remove("active");
    document.getElementsByClassName("slider")[2].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[2].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[2].classList.remove("active");
    document.getElementsByClassName("slider")[3].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[3].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[3].classList.remove("active");
    document.getElementsByClassName("slider")[4].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[4].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[4].classList.remove("active");
    document.getElementsByClassName("slider")[0].classList.add("active");
  }

  //  previvius auto
}
setInterval(autoplaySlider, 5000);
// sldier ending here/////////

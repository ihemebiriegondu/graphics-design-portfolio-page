const menuBar = document.getElementById("menubar");
const closeNavBarIcon = document.getElementById("close-nav-bar-icon");
const responsiveNav = document.getElementById("responsive-nav");
const personDiv = document.getElementById("person-div");
const firstMediaQuery = window.matchMedia("(max-width: 800px)");



if (window.innerWidth < 800) {

  function toggleNavBar() {
    responsiveNav.style.display = "flex";
    responsiveNav.style.flexDirection = "column";
    menuBar.style.display = "none";
    personDiv.style.top = "36rem";
  }

  function closeNavBar() {
    responsiveNav.style.display = "none";
    menuBar.style.display = "block";
    personDiv.style.top = "26rem";
  }

  if (window.innerWidth > 800) {
    responsiveNav.style.display = "none";
    menuBar.style.display = "none";
  }
}





menuBar.addEventListener("click", toggleNavBar);
closeNavBarIcon.addEventListener("click", closeNavBar);







mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
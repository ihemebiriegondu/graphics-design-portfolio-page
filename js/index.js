const menuBar = document.getElementById("menubar");
const closeNavBarIcon = document.getElementById("close-nav-bar-icon");
const responsiveNav = document.getElementById("responsive-nav");
const personDiv = document.getElementById("person-div");
const firstMediaQuery = window.matchMedia("(max-width: 800px)");
const secondMediaQuery = window.matchMedia("(max-width: 515px)");
const thirdMediaQuery = window.matchMedia("(max-width: 425px)");


function toggleNavBar() {
  responsiveNav.style.display = "flex";
  responsiveNav.style.flexDirection = "column";
  menuBar.style.display = "none";

  if (firstMediaQuery.matches) {
    personDiv.style.position = "absolute";
    personDiv.style.top = "36rem";
    return false;
  } 
  
  if (secondMediaQuery.matches) {
    personDiv.style.position= "absolute";
    personDiv.style.top = "12rem";
    return false;
  } 
  
  if (thirdMediaQuery.matches) {
    personDiv.style.position = "absolute";
    personDiv.style.top = "20rem";
    return false;
  }
}

function closeNavBar() {
  responsiveNav.style.display = "none";
  menuBar.style.display = "block";

  if (firstMediaQuery.matches) {
    personDiv.style.top="26rem";
    return false;
  } 
  
  if (secondMediaQuery.matches){
    personDiv.style.top="20rem";
    return false;
  } 
  
  if (thirdMediaQuery.matches) {
    personDiv.style.top ="14rem";
    return false;
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
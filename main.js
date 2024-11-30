const nav = document.querySelector("nav");
const mobilMenu = document.querySelector(".mobilMenu");
const ulMenu = nav.querySelector("ul");
let aMenu = nav.querySelectorAll("ul li a");


mobilMenu.addEventListener("click", () => {
  // Toggle the menu visibility
  ulMenu.classList.toggle("showMenu");
  if (ulMenu.classList.contains("showMenu")) {
    mobilMenu.querySelector("img").src = "./images/x-solid.svg"; 
    aMenu.classList.toggle("showMenu li a");
  } else {
    mobilMenu.querySelector("img").src = "./images/icon-hamburger.svg"; 
    aMenu.classList.toggle("showMenu li a");
  }
});

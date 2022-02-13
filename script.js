// Data Items
const menuItemArr = ["AIR FORCE", "JORDAN", "BLAZER", "CRATER", "HIPPIE"];

// Selecting Elements
var navBottom = document.querySelector(".navBottom");
var sliderItem = document.querySelector(".sliderItem");
const sliderWrapper = document.querySelector(".sliderWrapper");
//
menuItemArr.forEach((e) => {
  let element = document.createElement("h3");
  element.className = "menuItem";
  element.innerText = `${e}`;
  navBottom.appendChild(element);
});

// adding on click for slider
const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

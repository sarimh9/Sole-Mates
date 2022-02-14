// import data from './data.json' assert { type: "json" };
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

// Data Items
// const menuItemArr = ["AIR FORCE", "JORDAN", "BLAZER", "CRATER", "HIPPIE"];
// const pricesArr = [119, 149, 109, 129, 99];
// const imagesArr = ["air.png","jordan.png","blazer.png","crater.png","hippie.png"];

// Selecting Elements
var navBottom = document.querySelector(".navBottom");
var sliderItem = document.querySelector(".sliderItem");
const sliderWrapper = document.querySelector(".sliderWrapper");
//
// menuItemArr.forEach((e) => {
//   let element = document.createElement("h3");
//   element.className = "menuItem";
//   element.innerText = `${e}`;
//   navBottom.appendChild(element);
// });

products.forEach((e) => {
  let element = document.createElement("h3");
  element.className = "menuItem";
  element.innerText = `${e.title}`;
  navBottom.appendChild(element);
});

// adding on click for slider
const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

// menuItemArr.forEach((item, index) => {
//   sliderWrapper.innerHTML += `<div class="sliderItem">
//   <img src="./images/${imagesArr[index]}" alt="" class="sliderImage">
//   <div class="sliderBg"></div>
//   <div class="flex-column">
//     <h1 class="sliderTitle">${item}<br>NEW<br>SEASON</h1>
//     <h2 class="sliderPrice">$${pricesArr[index]}</h2>
//     <button class="buyButton">BUY NOW!</button>
//   </div>
// </div>`;
// });

products.forEach((item, index) => {
  sliderWrapper.innerHTML += `<div class="sliderItem">
  <img src="${item.colors[0].img}" alt="" class="sliderImage">
  <div class="sliderBg"></div>
  <div class="flex-column">
    <h1 class="sliderTitle">${item.title}<br>NEW<br>SEASON</h1>
    <h2 class="sliderPrice">$${item.price}</h2>
    <button class="buyButton">BUY NOW!</button>
  </div>
</div>`;
});

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

const currentproductName = document.querySelector(".productName");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductImage = document.querySelector(".productImageImage");
const currentColorBox = document.querySelectorAll(".color-box");
const currentSizeBox = document.querySelectorAll(".size-box");

const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // adding on click for slider
    sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;

    // changing product title name
    currentproductName.textContent = products[index].title;

    // changing product price
    currentProductPrice.textContent = "$" + products[index].price;

    currentProductImage.src = products[index].colors[0].img;

    // changing product available colors
    currentColorBox.forEach((color, colorIndex) => {
      color.style.backgroundColor = products[index].colors[colorIndex].code;
      color.style.border = "1px solid black";

      // changing product image on click
      color.addEventListener("click", () => {
        currentProductImage.src = products[index].colors[colorIndex].img;
        currentColorBox.forEach((colorInner) => {
          colorInner.style.border = "1px solid black";
        });
        color.style.border = "4px solid green";
      });
    });
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
    <a href="#product">
    <button class="buyButton">BUY NOW!</button>
    </a>
  </div>
</div>`;
});

// adding selected effect on sizes
currentSizeBox.forEach((sizeBox) => {
  sizeBox.addEventListener("click", () => {
    currentSizeBox.forEach((sizeBoxInner) => {
      sizeBoxInner.style.backgroundColor = "white";
      sizeBoxInner.style.color = "black";
    });
    sizeBox.style.backgroundColor = "black";
    sizeBox.style.color = "white";
  });
});

// Modal
const paymentModal = document.querySelector(".paymentModal");
const buyNow = document.querySelector(".buyNow");
buyNow.addEventListener("click", () => {
  paymentModal.classList.remove("displayNone");
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  paymentModal.classList.add("displayNone");
});

const features = document.querySelector(".features");
features.innerHTML += `
<div class="feature">
      <img class="featureIcon" src="./images/shipping.png" alt="">
      <span class="featureTitle">FREE SHIPPING</span>
      <span class="featureDescription">Free world wide shipping on all orders.</span>
    </div>
    <div class="feature">
      <img class="featureIcon" src="./images/return.png" alt="">
      <span class="featureTitle">30 DAYS RETURN</span>
      <span class="featureDescription">No question return and easy refund in 14 days.</span>
    </div>
    <div class="feature">
      <img class="featureIcon" src="./images/gift.png" alt="">
      <span class="featureTitle">GIFT CARDS</span>
      <span class="featureDescription">Buy gift cards and use coupon code easily.</span>
    </div>
    <div class="feature">
      <img class="featureIcon" src="./images/contact.png" alt="">
      <span class="featureTitle">CONTACT US!</span>
      <span class="featureDescription">Keep in touch via e-mail and our support system</span>
    </div>
`;

const footer = document.querySelector(".footer");
footer.innerHTML += `
<div class="footerLeft">
<div class="footerMenu">
  <h1 class="fMenuTitle">About Us</h1>
  <ul class="fList">
    <li class="fListItem">Company</li>
    <li class="fListItem">Contact</li>
    <li class="fListItem">Careers</li>
    <li class="fListItem">Affiliates</li>
    <li class="fListItem">Stores</li>
  </ul>
</div>
<div class="footerMenu">
  <h1 class="fMenuTitle">Useful Links</h1>
  <ul class="fList">
    <li class="fListItem">Support</li>
    <li class="fListItem">Refund</li>
    <li class="fListItem">FAQ</li>
    <li class="fListItem">Feedback</li>
    <li class="fListItem">Stories</li>
  </ul>
</div>
<div class="footerMenu">
  <h1 class="fMenuTitle">Products</h1>
  <ul class="fList">
    <li class="fListItem">Air Force</li>
    <li class="fListItem">Air Jordan</li>
    <li class="fListItem">Blazer</li>
    <li class="fListItem">Crater</li>
    <li class="fListItem">Hippie</li>
  </ul>
</div>
</div>
<div class="footerRight">
<div class="footerRightMenu">
  <h1 class="fMenuTitle">Subscribe to our newsletter</h1>
  <div class="fMail">
    <input type="email" placeholder="your@email.com" class="fInput">
    <button class="fButton">Join!</button>
  </div>
</div>
<div class="footerRightMenu">
  <h1 class="fMenuTitle">Follow Us</h1>
  <div class="fIcons">
    <img src="./images/facebook.png" alt="" class="fIcon">
    <img src="./images/twitter.png" alt="" class="fIcon">
    <img src="./images/instagram.png" alt="" class="fIcon">
    <img src="./images/whatsapp.png" alt="" class="fIcon">
  </div>
</div>
<div class="footerRightMenu">
  <span class="copyright">By: SARIM HUSSAIN <br> All rights reserved. 2022.</span>
</div>
</div>
`;

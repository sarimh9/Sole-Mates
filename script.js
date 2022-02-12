const menuItemArr = ["AIR FORCE", "JORDAN", "BLAZER", "CRATER", "HIPPIE"];
var navBottom = document.querySelector(".navBottom");

// for (let i = 0; i < menuItemArr.length; i++) {
//   let element = document.createElement("h3");
//   element.innerHTML = `<h3 class="menuItem">${menuItemArr[i]}</h3>`;
//   navBottom.appendChild(element);
// }

menuItemArr.forEach((e) => {
  let element = document.createElement("h3");
  element.className = "menuItem";
  element.innerText = `${e}`;
  console.log(element.innerHTML);
  navBottom.appendChild(element);
});

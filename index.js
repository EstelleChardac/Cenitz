const burgerButton = document.querySelector(".burgerButton");
const burgerNav = document.querySelector(".burgerNav");

burgerButton.addEventListener("click", () => {
  //   e.preventDefault;
  burgerNav.classList.toggle("show");
});

// function hide() {
//   if (burgerNav.isActive()) {
//     burgerNav.style.display = "none";
//   }
// }

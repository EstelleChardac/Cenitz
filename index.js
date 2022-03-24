const burgerButton = document.querySelector('.navBar__burger');
const burgerNav = document.querySelector('.burgerNav');

burgerButton.addEventListener('click', () => {
  burgerNav.classList.toggle('show');
});

const burgerOpen = document.querySelector('.navBar__burger');
const burgerNav = document.querySelector('.burgerNav');

burgerOpen.addEventListener('click', () => {
  burgerNav.classList.toggle('show');
});

// Mobile MenuPopup
const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('change');
  navbar.classList.toggle('change');
});
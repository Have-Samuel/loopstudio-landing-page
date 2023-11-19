// Mobile MenuPopup
const menuIcon = document.querySelector('.humburger');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('change');
  navbar.classList.toggle('change');
});
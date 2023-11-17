// Mobile MenuPopup
const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

const listItems = document.querySelectorAll('.nav-list > li');
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    navbar.classList.remove('change');
  });
});

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});
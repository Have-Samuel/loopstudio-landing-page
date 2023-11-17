// Mobile MenuPopup
const parentElement = document.querySelector('.header');
const menuIcon = document.querySelector('.hamburger-menu');
// capturing the third child of the document object
parentElement.insertBefore(menuIcon, parentElement.children[3]);

const navbar = document.querySelector('.navbar');

const listItems = document.querySelectorAll('.nav-list > li');
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    navbar.classList.remove('change');
  });
});

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
  // console.log(menuIcon);
});
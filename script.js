// Mobile MenuPopup
const menuIcon = document.querySelector('.humburger');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('change');
  navbar.classList.toggle('change');
});

// Projects
const projects = [
  {
    title: 'Time tracking dashboard',
    featuredImage: './desktop-images/desktop-preview-00.jpg',
  },
  {
    title: 'Time tracking dashboard',
    featuredImage: './desktop-images/desktop-preview-00.jpg',
  },
  {
    title: 'Time tracking dashboard',
    featuredImage: './desktop-images/desktop-preview-00.jpg',
  },
  {
    title: 'Time tracking dashboard',
    featuredImage: './desktop-images/desktop-preview-00.jpg',
  },
  {
    title: 'Time tracking dashboard',
    featuredImage: './desktop-images/desktop-preview-00.jpg',
  },
  {
    title: 'Time tracking dashboard',
    featuredImage: './desktop-images/desktop-preview-00.jpg',
  },
];

// Dynamically render projects
function renderCards() {
  return `
    <div class="card">
      <img src="${projects[0].featuredImage}" alt="Project 1" />
      <div class="card-content">
        <h2 class="title color-caption">${projects[0].title}</h2>
      </div>
    </div>
  `;
}

const projectsContainer = document.querySelector('#projects-container');
projectsContainer.innerHTML = `
  ${renderCards()}
`;

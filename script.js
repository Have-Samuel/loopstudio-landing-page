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
    title: 'deep earth',
    featuredImage: './images/desktop/image-deep-earth.jpg',
  },
  {
    title: 'night arcade',
    featuredImage: './images/desktop/image-night-arcade.jpg',
  },
  {
    title: 'soccer team vr',
    featuredImage: './images/desktop/image-soccer-team.jpg',
  },
  {
    title: 'the grid',
    featuredImage: './images/desktop/image-grid.jpg',
  },
  {
    title: 'from up above vr',
    featuredImage: './images/desktop/image-from-above.jpg',
  },
  {
    title: 'pocket borealis',
    featuredImage: './images/desktop/image-pocket-borealis.jpg',
  },
  {
    title: 'the curiosity',
    featuredImage: './images/desktop/image-curiosity.jpg',
  },
  {
    title: 'make it fisheye',
    featuredImage: './images/desktop/image-fisheye.jpg',
  },
];

// Dynamically render projects
function renderCards(work) {
  return `
    <div class="card">
      <img src="${work.featuredImage}" alt="Project 1" />
      <div class="card-content">
        <h2 class="title color-caption">${work.title}</h2>
      </div>
    </div>
  `;
}

const projectsContainer = document.querySelector('#projects-container');
projectsContainer.innerHTML = `
  ${projects.map(renderCards).join('')}
`;

// Containing Array
const allCardNames = [];

// Looping through the array
for (let i = 0; i < projects.length; i += 1) {
  allCardNames.push(projects[i].title);
}

//

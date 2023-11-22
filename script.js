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
    mobileImage: './images/mobile/image-deep-earth.jpg',
    featuredImage: './images/desktop/image-deep-earth.jpg',
  },
  {
    title: 'night arcade',
    mobileImage: './images/mobile/image-night-arcade.jpg',
    featuredImage: './images/desktop/image-night-arcade.jpg',
  },
  {
    title: 'soccer team vr',
    mobileImage: './images/mobile/image-soccer-team.jpg',
    featuredImage: './images/desktop/image-soccer-team.jpg',
  },
  {
    title: 'the grid',
    mobileImage: './images/mobile/image-grid.jpg',
    featuredImage: './images/desktop/image-grid.jpg',
  },
  {
    title: 'from up above vr',
    mobileImage: './images/mobile/image-from-above.jpg',
    featuredImage: './images/desktop/image-from-above.jpg',
  },
  {
    title: 'pocket borealis',
    mobileImage: './images/mobile/image-pocket-borealis.jpg',
    featuredImage: './images/desktop/image-pocket-borealis.jpg',
  },
  {
    title: 'the curiosity',
    mobileImage: './images/mobile/image-curiosity.jpg',
    featuredImage: './images/desktop/image-curiosity.jpg',
  },
  {
    title: 'make it fisheye',
    mobileImage: './images/mobile/image-fisheye.jpg',
    featuredImage: './images/desktop/image-fisheye.jpg',
  },
];

// Dynamically render projects
function renderCards(work) {
  return `
    <div class="card-m card-d">
      <img class="card-img" src="${work.mobileImage}" alt="Project 1" aria-hidden="true" />
      <img class="card-img-desktop" src="${work.featuredImage}" alt="Project 1" aria-hidden="true" />
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

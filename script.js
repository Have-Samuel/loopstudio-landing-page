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
    title: 'Age Calculator',
    description: 'Users should be able to View the optimal layout for the app depending on their device\'s screen size, See hover states for all interactive elements on the page, Calculate the age of a person in years, months, and days by selecting their date of birth from a date picker, Receive an error message if no date of birth is selected, After submitting the form, see a card with the date of birth details.',
    popupDescription: 'Users should be able to View the layout for the app depending on their device\'s screen size, See hover states for all interactive elements on the page, Calculate the age of a person in years, months, and days by selecting their date of birth from a date picker, Receive an error message if no date of birth is selected, After submitting the form, see a card with the date of birth details.',
    featuredImage: './desktop-images/desktop-previeW.jpg',
    popupImg: './desktop-images/desktop-DesIgn.jpg',
    technologies: ['Javascript', 'HTML', 'CSS', 'Gitflow'],
    liveLink: 'https://have-samuel.github.io/age-Calculator-App/',
    sourceLink: 'https://github.com/Have-Samuel/age-Calculator-App',
  },
  {
    title: 'section with dropdown menu',
    description: 'Users should be able to view the relevant dropdown menus on desktop and mobile when interacting with the navigation links, view the optimal layout for the content depending on their device\'s screen size, and see hover states for all interactive elements on the page.',
    popupDescription: 'Users should be able to see all dropdown menus on desktop and mobile when interacting with the navigation links, see the optimal layout for the content depending on their device\'s screen size, and see hover states for all interactive elements on the page.',
    featuredImage: './desktop-images/desktop-Preview.jpg',
    popupImg: './desktop-images/desktop-Design.jpg',
    technologies: ['Javascript', 'HTML', 'CSS', 'Gitflow'],
    liveLink: 'https://subtle-dd.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/section-with-dropdown',
  },
  {
    title: 'Advice Generator',
    description: 'Users should be able to View the optimal layout for the app depending on their device\'s screen size (Responsive), See hover states for all interactive elements on the page, Generate a new piece of advice at random ID by clicking the dice icon.',
    popupDescription: 'View the optimal layout for the app depending on their device\'s screen size See hover states for all interactive elements on the page Generate a new piece of advice by clicking the dice icon. Use the Axios Library to request data from the Advice Slip JSON API. Use async/await to handle the Promise returned by the Axios Library. Display the returned advice slip in the app. Display a loading state when waiting for a response from the API.',
    featuredImage: './desktop-images/desktop-previewAd.jpg',
    popupImg: './desktop-images/desktop-Av-design.jpg',
    technologies: ['API', 'Javascript', 'HTML', 'CSS', 'Gitflow'],
    liveLink: 'https://chipper-advicer.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/advice-generator-app',
  },
  {
    title: 'Interactive Credit Card',
    description: 'Simple Credit Card built with jQuery and Javascript, the User fills the form and see the details update on the Card, If there is any errors, they get notices, and the card is Responsive to different screen sizes..',
    popupDescription: 'Users should be able to Fill in the form and see the card details update in real time, Receive error messages when the form is submitted: if Any input field is empty, The card number, expiry date, or CVC fields are in the wrong format, View the optimal layout depending on their device\'s screen sizeSee hover, active, and focus states for interactive elements on the page.',
    featuredImage: './desktop-images/desktop-preview.jpg',
    popupImg: './desktop-images/desktop-design-1.jpg',
    technologies: ['jQuery', 'Flexbox', 'Javascript', 'Positioning'],
    liveLink: 'https://cc-kashata-d11e95.netlify.app/',
    sourceLink: 'https://github.com/Have-Samuel/interactive-Card-Details',
  },
  {
    title: 'Portfolio Website',
    description: 'Basic Portfolio Website that built with HTML, CSS and JavaScript, and shows two pages as a sample if more needed.',
    popupDescription: 'This a basic Portfolio Website that built with HTML, CSS and JavaScript, and shows two pages as a sample for the whole website to become functional.',
    featuredImage: './desktop-images/slider-1.png',
    popupImg: './desktop-images/slider-1.png',
    technologies: ['Javascript', 'Flexbox', 'Html', 'Css'],
    liveLink: 'https://have-samuel.github.io/PortfolioCsT1/',
    sourceLink: 'https://github.com/Have-Samuel/PortfolioCsT1',
  },
  {
    title: 'Time tracking dashboard',
    description: 'Users should be able to View the optimal layout for the app depending on their device\'s screen size, See hover states for all interactive elements on the page, Switch between viewing Daily, Weekly, and Monthly stats.',
    popupDescription: 'Users should view the optimal layout for the app depending on their device\'s screen size, See hover states for all interactive elements on the page, Switch between viewing Daily, Weekly, and Monthly stats.',
    featuredImage: './desktop-images/desktop-preview-00.jpg',
    popupImg: './desktop-images/desktop-design-Z.jpg',
    technologies: ['Json', 'Javascript', 'Best Practices'],
    liveLink: 'https://have-samuel.github.io/time-tracking-dashboard/',
    sourceLink: 'https://github.com/Have-Samuel/time-tracking-dashboard',
  },
];
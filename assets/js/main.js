/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

/*=============== EMAIL JS ===============*/
const contactForm     = document.getElementById('contact-form'),
      contactName     = document.getElementById('contact-name'),
      contactEmail    = document.getElementById('contact-email'),
      contactMessage1 = document.getElementById('contact-message1'),
      contactMessage2 = document.getElementById('contact-message2');

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value
  if (contactName.value === '' || contactEmail.value === '' || contactMessage1.value === '') {

    // add and remove color
    contactMessage2.classList.remove('color-blue');
    contactMessage2.classList.add('color-red');

    // show message
    contactMessage2.textContent = 'Write all the input fields';
    
  } else {
    // serviceID - TemplateID - aForm - publicKey
    emailjs.sendForm('service_1db1cmm', 'template_kjdho7d', contactForm, 'ssPLe1XuBEnwg4lWy')
     .then(() => {
       // show message and color
       contactMessage2.classList.add('color-blue');
       contactMessage2.textContent = "Message has been sent";

       // remove message after 5s
       setTimeout(() => {
         contactMessage2.textContent = '';
       }, 5000);
     })
     .catch((error) => {
       // show error message
       contactMessage2.classList.remove('color-blue');
       contactMessage2.classList.add('color-red');
       contactMessage2.textContent = `Failed to send message: ${error}`;
     });

    //  clear the input field 
    contactName.value     = ''
    contactEmail.value    = ''
    contactMessage1.value = ''
  }
};

contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin    : 'top',
  distance  : '60px',
  duration  : 2500,
  delay     : 400,
  // reset     : true // animation spead 
})

sr.reveal(`.home__data, .projects__container` )
sr.reveal(`.home__info div`, {delay : 600, origin : 'bottom', interval : 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin : 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin : 'right'})
sr.reveal(`.qualification__content, .services__card`, {interval: 100})
const home = document.querySelector('#home');
const nav = document.querySelector('nav');
const mobileMenu = document.querySelector('#mobile-menu')




mobileMenu.addEventListener('click', () => {
 nav.classList.toggle('display');
 mobileMenu.classList.toggle('rotate');
})

nav.addEventListener('click', () => {
 if (window.innerWidth <= 500) {
  nav.classList.toggle('display');
  mobileMenu.classList.toggle('rotate');
 }
})


const homeOptions = {};

function navChage(entries, homeObserver) {
 entries.forEach((entry) => {
  if (!entry.isIntersecting) {
   nav.classList.add('bgcolor');
  } else {
   nav.classList.remove('bgcolor')
  }
 })
}

const homeObserver = new IntersectionObserver(navChage, homeOptions)

homeObserver.observe(home);
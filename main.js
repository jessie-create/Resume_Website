// mobile nav
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navName = document.querySelector('#navbar-name');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');

// dispaly mobile menu
const mobileMenu =() => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//scroll
window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add('sticky'): navbar.classList.remove('sticky');
}
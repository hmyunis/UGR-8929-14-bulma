// Mobile Dropdown Menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', function () {
    navbarMenu.classList.toggle('is-active');
});
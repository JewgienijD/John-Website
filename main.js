const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.icon-menu');

menuIcon.addEventListener('click', function(){
    menuBody.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
})
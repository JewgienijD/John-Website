const menuBurger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.icon-menu');

menuBurger.addEventListener('click', function(){
    menuBody.classList.add('_active');
    iconMenu.classList.add('_active');
    return menuBody, iconMenu;
})

/*iconMenu.addEventListener('click', function(){
    menuBody.classList.remove('_active');
    iconMenu.classList.remove('_active');
    return menuBody, iconMenu;
})*/
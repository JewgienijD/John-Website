const menuBurger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
menuBurger.addEventListener('click', function(){
    menuBody.classList.add('_active');
    return menuBody;
})
export function handleNavbar() {
    const iconMenu = document.querySelector('.bx-menu');
    const menu = document.querySelector('.nav__menu');

    // el toggle se encarga de verificar si una CLASE está
    // si está la QUITA 
    // si no está la COLOCA

    iconMenu.addEventListener('click', function () {
        menu.classList.toggle('menu__show')
    })
}

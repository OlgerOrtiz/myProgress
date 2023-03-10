// import {handleNavbar} from "./components/handleNavbar";
// import {transitionNavbar} from "./components/transitionNavbar";

// handleNavbar();
// transitionNavbar();

function handleNavbar() {
    const iconMenu = document.querySelector('.bx-menu');
    const menu = document.querySelector('.nav__menu');

    // el toggle se encarga de verificar si una CLASE está
    // si está la QUITA 
    // si no está la COLOCA

    iconMenu.addEventListener('click', function () {
        menu.classList.toggle('menu__show')
    })
}

function transitionNavbar() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500){
            navbar.classList.add('navbar__active');
        }else{
            navbar.classList.remove('navbar__active');
        }
    })
}

function handleTheme(){
    const iconTheme = document.querySelector('.bx-sun');
    iconTheme.addEventListener('click', function(){
        document.body.classList.toggle('darkmode')
    })
}

handleNavbar();
transitionNavbar();
handleTheme()
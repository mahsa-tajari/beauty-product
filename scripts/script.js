const $ = document

const hamburgerMenuIcon = $.querySelector('.hamburger-icon__wrapper')

function openHamburgerMenu(){
    const MenuElem = $.querySelector('.nav-list')

    MenuElem.classList.toggle('nav-list--open')
    hamburgerMenuIcon.classList.toggle('hamburger-icon__wrapper--open')
}

hamburgerMenuIcon.addEventListener('click',openHamburgerMenu)
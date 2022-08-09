const cart = document.querySelector('.cart');

cart.addEventListener('click', open);

function open(){
    const slideBar = document.querySelector('.slide-bar');
    slideBar.classList.toggle('open-slide-bar');
}

const closeSlideBar = document.querySelector('.btn-close-slide-bar');

closeSlideBar.addEventListener('click', close);

function close(){
    const slideBar = document.querySelector('.slide-bar');
    slideBar.classList.toggle('open-slide-bar');
}

const filtre = document.querySelector('.filter');

filtre.addEventListener('click', openPopular);

function openPopular(){
    const popular = document.querySelector('.main-left');
    popular.classList.add('open-popular');   
}

const closePopular = document.querySelector('.close-popular');

closePopular.addEventListener('click', closePopularWindow);

function closePopularWindow(){
    const popular = document.querySelector('.main-left');
    popular.classList.remove('open-popular');   
}

const openSearchBar = document.querySelector('.icon-1');

openSearchBar.addEventListener('click', openSearchBarWindow);

function openSearchBarWindow(){
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.add('display-search-bar');   
}

const closeSearchBar = document.querySelector('.btn-close-search-bar');

closeSearchBar.addEventListener('click', closeSearchBarWindow);

function closeSearchBarWindow(){
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.remove('display-search-bar');   
}

const openNavbar = document.querySelector('.icon-2');

openNavbar.addEventListener('click', openNavbarWindow);

function openNavbarWindow(){
    const navbar = document.querySelector('.header-top-navbar');
    navbar.classList.add('display-navbar');   
}

const closeNavbar = document.querySelector('.btn-close-navbar');

closeNavbar.addEventListener('click', closeNavbarWindow);

function closeNavbarWindow(){
    const navbar = document.querySelector('.header-top-navbar');
    navbar.classList.remove('display-navbar');   
}



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


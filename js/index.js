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
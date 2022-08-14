const logo = document.querySelector('.header-top-logo');

logo.addEventListener('click', openIndexPage);

function openIndexPage(){
    location = 'index.html';
}

// const cart = document.querySelector('.cart');

// cart.addEventListener('click', open);

// function open(){
//     const slideBar = document.querySelector('.slide-bar');
//     slideBar.classList.toggle('open-slide-bar');
// }

const closeSlideBar = document.querySelector('.btn-close-slide-bar');

closeSlideBar.addEventListener('click', close);

function close(){
    const slideBar = document.querySelector('.slide-bar');
    slideBar.classList.toggle('open-slide-bar');
}

// const filtre = document.querySelector('.filter');

// filtre.addEventListener('click', openPopular);

// function openPopular(){
//     const popular = document.querySelector('.main-left');
//     popular.classList.add('open-popular');   
// }

// const closePopular = document.querySelector('.close-popular');

// closePopular.addEventListener('click', closePopularWindow);

// function closePopularWindow(){
//     const popular = document.querySelector('.main-left');
//     popular.classList.remove('open-popular');   
// }

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

document.addEventListener('scroll', displayScroller);

function displayScroller(){
    const scroller = document.querySelector('.scroller');
    if (scrollY > 140) {
        scroller.classList.add('display-scroller');
    } else {
        scroller.classList.remove('display-scroller');
    }
}

const scroller = document.querySelector('.scroller');

console.log(scroller)

scroller.addEventListener('click', goTop);

function goTop(){
    scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );   
}

// const connexionBackground = document.querySelector('.connexion-background');

// connexionBackground.addEventListener('click', zoomer);

// function zoomer(){
//     const connexionForm = document.querySelector('.connexion-form');  
//     connexionForm.classList.add('animate__animated', 'animate__fast', 'animate__pulse'); 
//     setTimeout(() => {
//         connexionForm.classList.remove('animate__animated', 'animate__fast', 'animate__pulse'); 
//     }, 1000);
// }

let imageMiniatures = document.querySelectorAll('.main-articles-left-bottom-image img');

imageMiniatures.forEach((imageMiniature) =>{
    imageMiniature.addEventListener('click', switchImage);
});

function switchImage(){
    let image = document.querySelector('.main-articles-left-top img');
    image.src = this.src;
}

let headerRight = document.querySelector('.client-container');

headerRight.addEventListener('mouseover', displayClientNavbarOn);
headerRight.addEventListener('mouseout', displayClientNavbarOff);

function displayClientNavbarOn(){
    document.querySelector('.client-navbar').classList.add('display-client-navbar');
}

function displayClientNavbarOff(){
    document.querySelector('.client-navbar').classList.remove('display-client-navbar');
}
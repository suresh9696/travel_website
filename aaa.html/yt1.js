const header=document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", wimdow.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
windows.onscroll =() => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};
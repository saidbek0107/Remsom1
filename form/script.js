let moon = document.getElementById('moon')
let sun = document.getElementById('sun')
let body = document.getElementById('body')
let container = document.getElementById('container')
let icon_title = document.getElementById('icon_title')

const show = document.querySelector("#show")
const hide = document.querySelector("#hide")
const password = document.querySelector("#password")


show.addEventListener('click', () => {

    show.style.display = "none"
    hide.style.display = "inline-block"


    const type = password.getAttribute("type") === "password" ? "text" : "text";
    password.setAttribute("type", type)

})

hide.addEventListener('click', () => {

    hide.style.display = "none"
    show.style.display = "inline-block"

    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type)

})




sun.addEventListener('click', () => {

    sun.style.display = 'none'
    moon.style.display = 'inline-block'
    body.style.background = 'rgb(20, 21, 47)'
    container.style.background = 'rgb(20, 21, 47)'
    // icon_title.style.color = 'white'

})

moon.addEventListener('click', () => {
    sun.style.display = 'inline-block'
    moon.style.display = 'none'
    body.style.background = 'white'
    container.style.background = 'white'
    icon_title.style.color = 'white'


})


const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

});

const closeNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display ="none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',closeNav)
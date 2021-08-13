const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const navclosing =document.querySelector('#navClosed')

navToggle.addEventListener("click",() =>{
nav.classList.toggle('open');
navIcon.forEach(icon => {
    icon.classList.toggle('hidden')
 })
})

window.addEventListener("resize",() => {
    if(document.body.clientWidth > 720){
    nav.classList.remove('open')
    navIcon.forEach(icon => {
        icon.classList.add('hidden')
    })
    navclosing.classList.remove('hidden')
}
})
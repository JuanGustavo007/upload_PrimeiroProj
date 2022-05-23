const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*Menu burger */
if (navToggle){
   navToggle.addEventListener('click',()=>{
      navMenu.classList.add('show-menu')
   })
}

/* Remover a class do burger quando descer */

if(navClose){
   navClose.addEventListener('click',()=>{
      navMenu.classList.remove('show-menu')
   })
}

/* Remove menu mobile*/
const navLink = document.querySelectorAll('.nav__link')

function linkaction(){
   const navMenu = document.getElementById('nav-menu')
   //quando clicamos no foreach nav__link, nos removemos o show-menu da class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkaction))

const sr = ScrollReveal({
   distance:'90px',
   duration:3000,
})
sr.reveal(`.home__data`,{origin:'top',delay:400})
sr.reveal(`.home__img`,{origin:'bottom',delay:600})
sr.reveal(`.home__footer`,{origin:'bottom',delay:600})


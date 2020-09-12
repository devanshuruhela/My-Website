/*full menu*/ 
const showMenu = () =>{
  const toggle = document.getElementById("nav-toggle"),
  nav = document.getElementById("nav-menu")

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu()

/*menu*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
/*linking to section*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

/*roll back menu*/
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*SCROLL*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*reveal home*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 100}); 
sr.reveal('.home__img',{delay: 300}); 
sr.reveal('.home__social-icon',{ interval: 100}); 

/*reveal about*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 300}); 
sr.reveal('.about__text',{delay: 300}); 

/*reveal skills*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 100}); 
sr.reveal('.skills__img',{delay: 500});

/*reveal projects*/
sr.reveal('.pro__img',{interval: 100}); 

/*reveal contact*/
sr.reveal('.contact__input',{interval: 100}); 




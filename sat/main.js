/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('navlink')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER WACTHES ===============*/
const swiperWatches = new Swiper('.homeswiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate : [-100, 0, -500],
            rotate: [0, 0, 15],
            opacity: 0
        },

        next: {
            translate : [100, 0, -500],
            rotate: [0, 0, -15],
            opacity: 0
        },
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  })

/*=============== GSAP ANIMATION ===============*/
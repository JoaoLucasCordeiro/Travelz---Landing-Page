// scrollreveal do título do banner
ScrollReveal().reveal('.writting-content', { delay: 300 });

// scrollreveal da parte about us
ScrollReveal().reveal('#h1-about-us', { delay: 300 });
ScrollReveal().reveal('#p-about-us', { delay: 500 });
ScrollReveal().reveal('.our-numbers', { delay: 700 });

// scrollreveal da parte da comunidade - posts
ScrollReveal().reveal('#h1-comunity', { delay: 300 });
ScrollReveal().reveal('#h4-comunity', { delay: 500 });
ScrollReveal().reveal('.post', { delay: 700 });
ScrollReveal().reveal('.posts-collum', { delay: 900 });

//FIM

//sliders das linhas aéreas
const swiperAirlines = new Swiper(".swiperAirlines", {

  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: false,
  },

  breakpoints: {
    // quando o width for >= 350px
    350: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    // quando o width for >= 850px
    850: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }

});
// FIM

// sliders dos destinos
const swiper = new Swiper(".mySwiper", {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // quando o width for >= 350px
    350: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // quando o width for >= 850px
    850: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }

});

// FIM

// sliders testimonials
const swiperTestimoial = new Swiper(".mySwiperTestimonial", {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },

  breakpoints: {
    // quando o width for >= 350px
    350: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // quando o width for >= 850px
    850: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 60
    }
  }

});

// FIM

// função de abrir e fechar menu mobile

// selecionando o botão do menu via DOM
const btnMobile = document.getElementById('btnMobile')

function toggleMenu(event) {

  // evitando conflito entre o evento touchstart e click
  if (event.type === 'touchstart') event.preventDefault()

  const nav = document.getElementById('nav')
  nav.classList.toggle('active')

  // tratando acessiblidade do menu pelo JS
  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)

  // tratando acessiblidade do menu pelo JS
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }

}

// evento de click simples
btnMobile.addEventListener('click', toggleMenu)
// touchstart vai ser um evento que vai funcionar melhor em telas touch - mobile
btnMobile.addEventListener('touchstart', toggleMenu)
// FIM
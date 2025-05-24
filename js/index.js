// document.querySelectorAll('.product-card').forEach(card => {
//     card.addEventListener('click', () => {
//         const productLink = 'https://example.com'; // Replace with the actual product link
//         window.open(productLink, '_blank');
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (current && current !== 'home' && link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
});

var typed = new Typed('#element', {
  strings: ["I'm Shimaa ", 'Web Developer', 'Web Designer', 'And Project Manager'],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

document.addEventListener('DOMContentLoaded', () => {
  const chatIcon = document.getElementById('chat-icon');
  const chatSection = document.getElementById('chat-section');
  const closeChat = document.getElementById('close-chat');

  chatIcon.addEventListener('click', () => {
    chatSection.classList.toggle('active');
  });

  closeChat.addEventListener('click', () => {
    chatSection.classList.remove('active');
  });
});
const swiper = new Swiper('.product-swiper', {
  effect: 'creative',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  // speed: 1000,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
      rotate: [0, 100, 0],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
      rotate: [0, -100, 0],
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const ribbonSwiper = new Swiper('.ribbon-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
});
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = Math.ceil(target / 100);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
});

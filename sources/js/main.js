import Swiper from 'swiper';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import '../scss/main.scss';

// configure Swiper to use modules
SwiperCore.use([Pagination]);

window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btnToggle = document.querySelector('.btn-toggle');
  const header = document.querySelector('.header');
  const dropdown = document.querySelectorAll('.has-dropdown');

  // mobile menu
  const handleBtnToggle = () => {
    body.classList.toggle('overflow-hidden');
    btnToggle.classList.toggle('btn-toggle--active');
    header.classList.toggle('mobile-nav--active');
  };

  // dropdown
  const handleDropdown = e => {
    if (e.target.closest('.has-dropdown')) {
      e.preventDefault();
      const current = e.target.closest('.has-dropdown');

      // disabled all dropdown without clicked
      dropdown.forEach(content => {
        if (content !== current) {
          content.classList.remove('is-active');
        }
      });

      current.classList.toggle('is-active');
    }
  };

  // Swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      994: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // EVENTS
  // mobile menu open/close
  btnToggle.addEventListener('click', handleBtnToggle);

  // dropdown menu
  document.addEventListener('click', handleDropdown);
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.mobile_menu');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('mobile_menu_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('mobile_menu_active');
          menu.classList.toggle('menu_active');
      })
  })

  const swiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,
    slidesPerWiew: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
})
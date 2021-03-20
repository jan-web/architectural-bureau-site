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
  // const worksGallery = document.querySelector('.works__gallery');

  // worksGallery.addEventListener('mouseover', (e)=> {
  //   e.stopImmediatePropagation();
  //   console.log(e);
  //    const card = e.target.closest('.works__card');
  //   card.firstElementChild.classList.add('works__card-active')
  //   })

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    direction: 'horizontal',
    loop: true,
    slidesPerWiew: 1,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
})
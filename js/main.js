window.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.slider__img-bg', {
    navigation: {
      nextEl: '.slider__icon-next',
      prevEl: '.slider__icon-prev',
    },
    thumbs: {
      swiper: {
        el: ".slider__img-sm",
        slidesPerView: 8,
      }
    }
  });




  
});
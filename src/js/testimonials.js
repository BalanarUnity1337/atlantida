import { Swiper, Pagination } from 'swiper/dist/js/swiper.esm.js';

Swiper.use([Pagination]);

export default new Swiper('.testimonials__slider', {
  speed: 1300,
  containerModifierClass: 'testimonials__slider--',
  slideClass: 'testimonials__slide',
  slideActiveClass: 'testimonials__slide--active',
  slideNextClass: 'testimonials__slide--next',
  wrapperClass: 'testimonials__slides',
  pagination: {
    el: '.testimonials__slider-pagination',
    type: 'bullets',
    bulletElement: 'button',
    bulletClass: 'testimonials__slider-pagination-item',
    bulletActiveClass: 'testimonials__slider-pagination-item--active',
    modifierClass: 'testimonials__slider-pagination--',
    clickableClass: 'testimonials__slider-pagination--clickable',
    clickable: true
  }
});

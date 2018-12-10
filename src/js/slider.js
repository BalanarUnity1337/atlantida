import { Swiper, Navigation } from 'swiper/dist/js/swiper.esm.js';

Swiper.use([Navigation]);

export default new Swiper('.slider', {
  speed: 1000,
  containerModifierClass: 'slider--',
  slideClass: 'slider__slide',
  slideActiveClass: 'slider__slide--active',
  slideNextClass: 'slider__slide--next',
  slidePrevClass: 'slider__slide--prev',
  wrapperClass: 'slider__slides',
  navigation: {
    nextEl: '.slider__nav--next',
    prevEl: '.slider__nav--prev',
    disabledClass: 'slider__nav--disabled'
  }
});

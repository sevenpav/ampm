import 'swiper/css/swiper.css'
import Swiper from 'swiper/js/swiper'

$(() => {
  const $productD = $('.product-d')

  if (!$productD.length) return

  const thumb = new Swiper('.product-d__thumb.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 16,
    loop: true,
    width: 72
  })

  new Swiper('.product-d__slider.swiper-container', {
    thumbs: {
      swiper: thumb
    },
    slidesPerView: 1,
    spaceBetween: 1
  })
})

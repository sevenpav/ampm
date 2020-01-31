import 'swiper/css/swiper.css'
import Swiper from 'swiper/js/swiper'

$(() => {
  const $productD = $('.product-d')

  if (!$productD.length) return

  new Swiper('.product-d__sub-slider.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 16,
    loop: true,
    width: 72
  })

  const $img = $('.product-d__img', $productD)
  const $subSlider = $('.product-d__sub-slider', $productD)

  $subSlider.on('click', '.product-d__sub-slider-slide', function() {
    const $self = $(this)
    const img = $self.data('img')

    $img.attr('src', img)
  })
})

import 'swiper/css/swiper.css'
import Swiper from 'swiper/js/swiper'

$(() => {
  const $slider = $('.set-slider')

  if (!$slider.length) return

  const slider = new Swiper('.set-slider__container.swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    pagination: {
      el: '.set-slider__pagination',
      clickable: true,
      bulletClass: 'set-slider__pagination-item',
      bulletActiveClass: 'set-slider__pagination-item--active',
      renderBullet: function(index, className) {
        return `<li class="set-slider__pagination-item ${className}"><span></span></li>`
      }
    },
    breakpoints: {
      991.98: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      767.98: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      575.98: {
        slidesPerView: 2,
        slidesPerGroup: 2
      }
    }
  })

  slider.on('slide', () => {
    slider.activeIndex
  })

  const $slide = $('.set-slider__slide', $slider)
  const $btn = $('.btn-normal', $slide)

  const $counter = $('.set-slider__counter', $slider)
  const $selected = $('._selected', $counter)
  const $all = $('._all', $counter)

  $all.text($slide.length)

  $selected.text($('.set-slider__slide--inset').length)

  $btn.click(function() {
    const $self = $(this)
    const $parentSlide = $self.parents('.set-slider__slide')

    const inSet = Boolean($parentSlide.data('inset'))

    $parentSlide.data('inset', !inSet)

    $parentSlide.toggleClass('set-slider__slide--inset')

    $selected.text($('.set-slider__slide--inset').length)

    if (inSet) {
      $self.text('Добавить в комплект')
    } else {
      $self.text('Убрать из комплекта')
    }
  })
})

$(() => {
  const $btn = $('.slide-btn__self')
  const $content = $('.slide-btn__content')

  $btn.click(() => {
    $content.slideToggle()
  })
})

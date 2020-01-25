$(() => {
  const $input = $('.input-password__input')
  const $toggleBtn = $('.input-password__btn-toggle')

  $toggleBtn.click(() => {
    $toggleBtn.toggleClass('input-password__btn-toggle--show')

    $toggleBtn.hasClass('input-password__btn-toggle--show')
      ? $input.attr('type', 'text')
      : $input.attr('type', 'password')
  })
})

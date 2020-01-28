$(() => {
  const $inputPassword = $('.input-password')

  if (!$inputPassword.length) return

  const $input = $('.input-password__input', $inputPassword)
  const $toggleBtn = $('.input-password__btn-toggle', $inputPassword)

  $toggleBtn.click(() => {
    $toggleBtn.toggleClass('input-password__btn-toggle--show')

    $toggleBtn.hasClass('input-password__btn-toggle--show')
      ? $input.attr('type', 'text')
      : $input.attr('type', 'password')
  })
})

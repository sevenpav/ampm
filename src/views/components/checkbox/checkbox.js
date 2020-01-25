$(() => {
  const $checkbox = $('.checkbox')
  const $label = $('.checkbox__label', $checkbox)

  $label.on('change', function() {
    $(this)
      .parents('.checkbox')
      .toggleClass('checkbox--checked')
  })
})

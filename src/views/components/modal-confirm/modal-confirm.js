$(() => {
  const $modal = $('.modal-confirm')

  if (!$modal.length) return

  const $darkBg = $('.dark-bg')

  $('._closeModal', $modal).click(() => {
    $modal.removeClass('modal--show')
    $darkBg.removeClass('dark-bg--show')
  })
})

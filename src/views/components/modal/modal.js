$(() => {
  const $darkBg = $('.dark-bg')
  const $modal = $('.modal')
  const $btnClose = $('.modal__btn-close', $modal)

  $darkBg.click(() => {
    if ($darkBg.hasClass('dark-bg--show')) {
      $darkBg.removeClass('dark-bg--show')
      $modal.removeClass('modal--show')
    }
  })

  $btnClose.click(() => {
    $darkBg.removeClass('dark-bg--show')
    $modal.removeClass('modal--show')
  })
})

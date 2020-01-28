$(() => {
  const $page = $('#cart-pg')

  if (!$page.length) return

  const $btnDownload = $('.cart-pg__btn-unpload', $page)
  const $modalUpload = $('.modal-upload', $page)
  const $darkBg = $('.dark-bg')

  $btnDownload.click(() => {
    $darkBg.addClass('dark-bg--show')
    $modalUpload.addClass('modal--show')
  })
})

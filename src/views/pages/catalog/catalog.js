$(() => {
  const $page = $('#catalog-pg')

  const $btnDownload = $('.catalog-pg__btn-unpload', $page)
  const $modalUpload = $('.modal-upload', $page)
  const $darkBg = $('.dark-bg')

  $btnDownload.click(() => {
    $darkBg.addClass('dark-bg--show')
    $modalUpload.addClass('modal--show')
  })
})

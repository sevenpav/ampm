$(() => {
  const $productDownload = $('.product-download')

  if (!$productDownload.length) return

  const $modal = $('.modal._scheme', $productDownload)
  const $darkBg = $('.dark-bg')

  $('.product-download__link._scheme', $productDownload).click(() => {
    $darkBg.addClass('dark-bg--show')
    $modal.addClass('modal--show')
  })
})

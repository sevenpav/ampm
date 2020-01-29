$(() => {
  const $page = $('#seller-list-pg')

  if (!$page.length) return

  const $btnAddSeller = $('.seller-list-pg__header .btn-normal', $page)
  const $modalAddSeller = $('.modal-new-seller', $page)

  $btnAddSeller.click(() => {
    $modalAddSeller.addClass('modal--show')
  })
})

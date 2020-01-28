$(() => {
  const $page = $('#seller-list-pg')

  const $btnAddSeller = $(
    '.seller-list-pg__header .seller-list-pg__btn-normal',
    $page
  )
  const $modalNewSeller = $('.modal-new-seller', $page)

  $btnAddSeller.click(() => {
    $modalNewSeller.addClass('modal--show')
  })
})

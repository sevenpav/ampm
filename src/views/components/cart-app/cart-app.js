$(() => {
  const $cartApp = $('.cart-app')

  if (!$cartApp.length) return

  const $darkBg = $('.dark-bg')
  const $modalEmpty = $('.cart-app__modal-empty', $cartApp)
  const $btnEmptyCart = $('.cart-app__empty-cart-btn', $cartApp)

  $btnEmptyCart.click(() => {
    $darkBg.addClass('dark-bg--show')
    $modalEmpty.addClass('modal--show')
  })
})

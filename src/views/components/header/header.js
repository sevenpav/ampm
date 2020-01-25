$(() => {
  const $header = $('.header')
  const $profile = $('.header__profile', $header)

  const $profileMenu = $('.header__profile-menu')

  $profile.hover(
    () => {
      $profileMenu.addClass('header__profile-menu--show')
    },
    () => {
      $profileMenu.removeClass('header__profile-menu--show')
    }
  )

  const $catalogLink = $('._catalog-menu', $header)

  const $catalogMenu = $('.catalog-menu', $header)

  const $cartLink = $('.header__cart-link', $header)
  const $darkBg = $('.dark-bg')
  const $modalCart = $('.modal-cart')

  $catalogLink.add($catalogMenu).hover(
    () => $catalogMenu.show(),
    () => $catalogMenu.hide()
  )

  $cartLink.click(e => {
    e.preventDefault()

    $darkBg.addClass('dark-bg--show')
    $modalCart.addClass('modal--show')
  })
})

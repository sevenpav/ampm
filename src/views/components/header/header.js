import isTouchDevice from 'assets/js/isTouchDevice.js'

$(() => {
  const $header = $('.header')

  const $hamburgerBtn = $('.header__hamburger-btn', $header)
  const $closeBtn = $('.header__btn-close', $header)
  const $darkBg = $('.dark-bg')

  $hamburgerBtn.click(() => {
    $header.addClass('header--mobile')
    $darkBg.addClass('dark-bg--show')
  })

  $closeBtn.click(() => {
    $header.removeClass('header--mobile')
    $darkBg.removeClass('dark-bg--show')
  })

  const $cartLink = $('.header__cart-link', $header)
  const $modalCart = $('.modal-cart')

  $cartLink.click(e => {
    e.preventDefault()

    $darkBg.addClass('dark-bg--show')
    $modalCart.addClass('modal--show')
  })

  const $profile = $('.header__profile', $header)
  const $profileMenu = $('.header__profile-menu', $header)

  if (isTouchDevice) {
    $profile.click(() => {
      $profileMenu.toggleClass('header__profile-menu--show')
    })
  } else {
    $profile.hover(
      () => {
        $profileMenu.addClass('header__profile-menu--show')
      },
      () => {
        $profileMenu.removeClass('header__profile-menu--show')
      }
    )
  }

  if (!isTouchDevice) {
    const $catalogLink = $('._catalog-menu', $header)

    const $catalogMenu = $('.catalog-menu', $header)

    $catalogLink.add($catalogMenu).hover(
      () => $catalogMenu.show(),
      () => $catalogMenu.hide()
    )
  }
})

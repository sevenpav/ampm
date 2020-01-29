$(() => {
  const $header = $('.header')
  const $profile = $('.header__profile', $header)

  const $hamburgerBtn = $('.header__hamburger-btn', $header)
  const $closeBtn = $('.header__btn-close', $header)
  const $darkBg = $('.dark-bg')

  const $profileMenu = $('.header__profile-menu', $header)

  $hamburgerBtn.click(() => {
    $header.addClass('header--mobile')
    $darkBg.addClass('dark-bg--show')
  })

  $closeBtn.click(() => {
    $header.removeClass('header--mobile')
    $darkBg.removeClass('dark-bg--show')
  })

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

$(() => {
  const $productChar = $('.product-char')

  if (!$productChar.length) return

  const $btnMore = $('.product-char__btn-show-more', $productChar)
  const $all = $('.product-char__all', $productChar)
  const $allContainer = $('.product-char__all-container', $all)

  const $label = $('span', $btnMore)

  let isOpen = false

  $btnMore.click(() => {
    isOpen = !isOpen

    $all.toggleClass('product-char__all-container--show')

    $label.text(isOpen ? 'Скрыть' : 'Показать')
    $allContainer.slideToggle()
  })
})

$(() => {
  const $search = $('.search')
  const $icon = $('.search__icon-loupe', $search)
  $icon.click(() => {
    $search.toggleClass('search--open')
  })
})

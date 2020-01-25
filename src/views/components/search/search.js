$(() => {
  const $search = $('.search')

  const $input = $('.search__input', $search)
  const $icon = $('.search__icon-loupe', $search)

  $search.click(() => {
    if ($search.hasClass('search--open')) {
      return
    }

    $search.add($input).animate(
      {
        width: '100%'
      },
      'slow'
    )
  })
})

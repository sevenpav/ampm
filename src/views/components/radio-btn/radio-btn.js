$(() => {
  const $radioBtn = $('.radio-btn')

  if (!$radioBtn.length) return

  const $label = $('.radio-btn__label', $radioBtn)

  $label.on('change', function() {
    const $self = $(this)

    const name = $('.radio-btn__input', $self).attr('name')

    const $targetRadioBtn = $(
      `.radio-btn__input[name="${name}"]`,
      $radioBtn
    ).parents('.radio-btn')

    const $radioBtnChecked = $targetRadioBtn.filter('.radio-btn--checked')

    $radioBtnChecked
      .not($($self).parents('.radio-btn'))
      .removeClass('radio-btn--checked')

    $self.parents('.radio-btn').addClass('radio-btn--checked')
  })
})

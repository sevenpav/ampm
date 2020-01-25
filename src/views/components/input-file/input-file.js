$(() => {
  const $inputFile = $('.input-file')
  const $input = $('.input-file__input', $inputFile)
  const $label = $('.input-file__label', $inputFile)
  const $iconLabel = $('.input-file__icon-label', $inputFile)

  $input.on('change', () => {
    let fileName = $input
      .val()
      .replace(/\\/g, '/')
      .split('/')
      .pop()

    if (fileName.length > 20) {
      fileName = `${fileName.slice(0, 20)}...`
    }

    $inputFile.addClass('input-file--selected')
    $iconLabel.text('Загрузить')
    $label.text(fileName)
  })
})

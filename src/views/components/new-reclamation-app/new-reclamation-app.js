$(() => {
  const $newReclamationApp = $('.new-reclamation-app')

  if (!$newReclamationApp.length) return

  const { newPosition } = window

  const $leftSideContainer = $('.layout-app-2__l-side', $newReclamationApp)

  const $container = $('.layout-app-2__display', $leftSideContainer)

  const $confirmModal = $('.modal-confirm', $newReclamationApp)

  const $darkBg = $('.dark-bg')

  let candidate = null
  let positionCounter = 1

  const addPosition = () => {
    const tepmlate = newPosition.content.cloneNode(true)

    $container.append(tepmlate)

    positionCounter++

    $('html, body').animate({ scrollTop: $(document).height() }, 'slow')
  }

  $leftSideContainer.on('click', '._addPosition', addPosition)

  const removePosition = () => {
    candidate.remove()

    positionCounter--

    $confirmModal.removeClass('modal--show')
    $darkBg.removeClass('dark-bg--show')
  }

  $container.on('click', '.btn-close', function() {
    if (positionCounter === 1) {
      const synth = window.speechSynthesis

      const utterThis = new SpeechSynthesisUtterance(
        'Вы не можете удалить единственную рекламацию.'
      )

      synth.speak(utterThis)

      return
    }

    candidate = $(this).parents('.content-display')

    $confirmModal.addClass('modal--show')
    $darkBg.addClass('dark-bg--show')
  })

  const $deletePositionBtn = $('._deletePosition', $confirmModal)

  $deletePositionBtn.click(removePosition)
})

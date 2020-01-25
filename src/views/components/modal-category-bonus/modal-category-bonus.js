$(() => {
  let currentStep = 0

  const $darkBg = $('.dark-bg')
  const $modalCategoryBonus = $('.modal-category-bonus')

  const $steps = $('.modal-category-bonus__step', $modalCategoryBonus)

  const $nextBtn = $('._step', $modalCategoryBonus)
  const $cancelBtn = $('._cancel', $modalCategoryBonus)

  const $radioBtns = $('.radio-btn', $modalCategoryBonus)

  const $sum = $('.modal-category-bonus__sum span')

  $radioBtns.click(function() {
    const $self = $(this)
    const value = $('.radio-btn__label-text', $self).text()

    $sum.text(value)
  })

  const cancelForm = () => {
    $darkBg.removeClass('dark-bg--show')
    $modalCategoryBonus.removeClass('modal--show')

    $steps.eq(currentStep).removeClass('modal-category-bonus__step--show')

    currentStep = 0

    $steps.eq(currentStep).addClass('modal-category-bonus__step--show')
  }

  $cancelBtn.click(cancelForm)

  $nextBtn.click(() => {
    $steps.eq(currentStep).removeClass('modal-category-bonus__step--show')
    $steps.eq(++currentStep).addClass('modal-category-bonus__step--show')

    if (currentStep === $steps.length - 1) {
      const interval = setInterval(() => {
        if (!$modalCategoryBonus.hasClass('modal--show')) {
          cancelForm()
          clearInterval(interval)
        }
      }, 100)
    }
  })
})

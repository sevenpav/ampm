$(() => {
  const $bonusTabs = $('.bonus-tabs')
  const $btnTabs = $('.bonus-tabs__tab-btn', $bonusTabs)
  const $tabs = $('.bonus-tabs__tab', $bonusTabs)

  const $subBtnTabs = $(
    '.bonus-tabs__tab[data-target="История"] .bonus-tabs__sub-tab-btn',
    $bonusTabs
  )
  const $subTabs = $(
    '.bonus-tabs__tab[data-target="История"] .bonus-tabs__sub-tab',
    $bonusTabs
  )

  $subBtnTabs.click(function() {
    const $self = $(this)
    const target = $self.data('target')

    if (!$self.hasClass('bonus-tabs__sub-tab-btn--active')) {
      $subBtnTabs
        .filter('.bonus-tabs__sub-tab-btn--active')
        .removeClass('bonus-tabs__sub-tab-btn--active')

      $self.addClass('bonus-tabs__sub-tab-btn--active')

      $subTabs
        .filter('.bonus-tabs__sub-tab--show')
        .removeClass('bonus-tabs__sub-tab--show')

      $subTabs
        .filter(`[data-target="${target}"]`)
        .addClass('bonus-tabs__sub-tab--show')
    }
  })

  $btnTabs.click(function() {
    const $self = $(this)
    const target = $self.data('target')

    if (!$self.hasClass('bonus-tabs__tab-btn--active')) {
      $btnTabs
        .filter('.bonus-tabs__tab-btn--active')
        .removeClass('bonus-tabs__tab-btn--active')

      $self.addClass('bonus-tabs__tab-btn--active')

      $tabs
        .filter('.bonus-tabs__tab--show')
        .removeClass('bonus-tabs__tab--show')

      $tabs
        .filter(`[data-target="${target}"]`)
        .addClass('bonus-tabs__tab--show')
    }
  })

  const $darkBg = $('.dark-bg')
  const $modalCategoryBonus = $('.modal-category-bonus')
  const $categoryItems = $('.category-bonus-item', $bonusTabs)

  const $categoryItemsBtn = $(
    '.category-bonus-item__btn-normal',
    $categoryItems
  )

  $categoryItemsBtn.click(function() {
    const $self = $(this)

    const $parent = $self.parents('.category-bonus-item')

    const $img = $parent.find('.category-bonus-item__img').attr('src')

    $modalCategoryBonus.find('.modal-category-bonus__img').attr('src', $img)

    $darkBg.addClass('dark-bg--show')
    $modalCategoryBonus.addClass('modal--show')
  })
})

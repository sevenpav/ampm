import Tabs from 'assets/js/Tabs.js'

$(() => {
  const $bonusTabs = $('.bonus-tabs')

  if (!$bonusTabs.length) return

  new Tabs({
    parentClass: 'bonus-tabs',
    tabs: 'tabs__tab-btn',
    targetClass: 'bonus-tabs__tab'
  }).init()

  new Tabs({
    parentClass: 'bonus-tabs',
    tabs: 'small-tabs__tab-btn',
    targetClass: 'bonus-tabs__sub-tab'
  }).init()

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

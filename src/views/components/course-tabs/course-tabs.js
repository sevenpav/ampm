import Tabs from 'assets/js/Tabs.js'

$(() => {
  const hash = window.location.hash

  const $courseTabs = $('.course-tabs')

  const $tabs = $('.course-tabs__tab', $courseTabs)

  if (hash === '#result') {
    $tabs.removeClass('course-tabs__tab--show')
    $('._result').addClass('course-tabs__tab--show')
  } else {
    $tabs
      .filter('[data-target="Описание курса"]')
      .addClass('course-tabs__tab--show')
  }

  new Tabs({
    parentClass: 'course-tabs',
    tabs: 'course-tabs__tab-btn',
    targetClass: 'course-tabs__tab'
  }).init()

  new Tabs({
    parentClass: 'course-tabs',
    $tabs: $('.course-tabs__footer .course-tabs__btn-normal'),
    activeClass: 'course-tabs__tab-btn--active',
    targetClass: 'course-tabs__tab',
    targetActiveClass: 'course-tabs__tab-btn'
  }).init()
})

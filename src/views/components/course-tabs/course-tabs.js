$(() => {
  const hash = window.location.hash

  const $courseTabs = $('.course-tabs')

  const $btnTabs = $('.course-tabs__tab-btn', $courseTabs)

  const $btnsToTab = $(
    '.course-tabs__btn-normal[data-target="Описание курса"], .course-tabs__btn-normal[data-target="Прохождение курса"]',
    $courseTabs
  )

  const $tabs = $('.course-tabs__tab', $courseTabs)

  if (hash === '#result') {
    $tabs.removeClass('course-tabs__tab--show')
    $('._result').addClass('course-tabs__tab--show')
  } else {
    $tabs
      .filter('[data-target="Описание курса"]')
      .addClass('course-tabs__tab--show')
  }

  const tabSwitch = $self => {
    const target = $self.data('target')

    $btnTabs
      .filter('.course-tabs__tab-btn--active')
      .removeClass('course-tabs__tab-btn--active')

    $btnTabs
      .filter(`.course-tabs__tab-btn[data-target="${target}"]`)
      .addClass('course-tabs__tab-btn--active')

    $tabs
      .filter('.course-tabs__tab--show')
      .removeClass('course-tabs__tab--show')

    $tabs.filter(`[data-target="${target}"]`).addClass('course-tabs__tab--show')
  }

  $btnsToTab.click(function() {
    tabSwitch($(this))
  })

  $btnTabs.click(function() {
    tabSwitch($(this))
  })
})

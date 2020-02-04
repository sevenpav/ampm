import Tabs from 'assets/js/Tabs'

$(() => {
  const $app = $('.instructions-app')

  if (!$app.length) return

  new Tabs({
    parentClass: 'instructions-app',
    tabs: 'instructions-app__tab-btn',
    targetClass: 'instructions-app__tab'
  }).init()

  new Tabs({
    parentClass: 'instructions-app',
    tabs: '_tabBtn',
    targetClass: 'instructions-app__tab',
    notUseActiveClass: true
  }).init()
})

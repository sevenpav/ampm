import Navigo from 'navigo'

$(() => {
  const $steps = $('.learning-pg__step')
  const $intro = $('._intro')

  const $courseList = $('._course-list')

  const root = null
  const useHash = true
  const hash = '#'
  const router = new Navigo(root, useHash, hash)

  router
    .on({
      'course-list': () => {
        $steps.not($courseList).hide()
        $courseList.css('display', 'flex')
      },
      '*': () => {
        $steps.not($intro).hide()
        $intro.css('display', 'flex')
      }
    })
    .resolve()
})

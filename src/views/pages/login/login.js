import Navigo from 'navigo'

$(() => {
  const $forms = $('#login-pg > *')
  const $authForm = $('._auth')
  const $registrationForm = $('._registration')
  const $recoverForm = $('._recover')

  const root = null
  const useHash = true
  const hash = '#'
  const router = new Navigo(root, useHash, hash)

  router
    .on({
      registration: () => {
        $forms.not($registrationForm).hide()
        $registrationForm.css('display', 'flex')
      },
      recover: () => {
        $forms.not($recoverForm).hide()
        $recoverForm.css('display', 'flex')
      },
      '*': () => {
        $forms.not($authForm).hide()
        $authForm.css('display', 'flex')
      }
    })
    .resolve()
})

import Navigo from 'navigo'

$(() => {
  const $page = $('#login-pg')

  if (!$page.length) return

  const formContainer = document.querySelector('.login-pg__form-container')

  const root = null
  const useHash = true
  const hash = '#'
  const router = new Navigo(root, useHash, hash)

  const { registration, recover, auth } = window

  const routerHandler = tmpl => () => {
    formContainer.innerHTML = ''

    formContainer.appendChild(tmpl.content.cloneNode(true))
  }

  router
    .on({
      registration: routerHandler(registration),
      recover: routerHandler(recover),
      '*': routerHandler(auth)
    })
    .resolve()
})

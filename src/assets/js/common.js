import isTouchDevice from 'assets/js/isTouchDevice.js'

const { body } = document

isTouchDevice && body.classList.add('isTouchDevice')

$(() => {
  $('.header__profile-menu').addClass('isTouchDevice')
})

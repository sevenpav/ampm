$(() => {
  const $orderApp = $('.order-app')

  if (!$orderApp.length) return

  const $deliveryTab = $('.order-app__delivery-tab', $orderApp)

  $deliveryTab.click(function() {
    const $self = $(this)

    $deliveryTab.not($self).removeClass('order-app__delivery-tab--active')
    $self.addClass('order-app__delivery-tab--active')
  })
})

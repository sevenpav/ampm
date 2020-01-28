$(() => {
  const $tableOrders = $('.table-orders')

  if (!$tableOrders.length) return

  $('.table-orders__tbody tr', $tableOrders).click(function() {
    window.location.href = $(this).data('href')
  })
})

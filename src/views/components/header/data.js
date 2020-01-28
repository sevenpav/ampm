module.exports = {
  menu: [
    {
      name: 'КАТАЛОГ',
      modifier: '_catalog-menu',
      href: 'catalog.html'
    },
    {
      name: 'КОЛЛЕКЦИИ',
      modifier: '_collections-menu',
      href: '#'
    },
    {
      name: 'АКЦИИ',
      href: '#'
    },
    {
      name: 'ЗАКАЗЫ',
      href: 'order-list.html'
    },
    {
      name: 'БОНУСЫ',
      href: 'bonus.html'
    },
    {
      name: 'ОБУЧЕНИЕ',
      href: 'learning.html#intro'
    }
  ],
  profileMenu: [
    {
      icon: require('views/components/header/img/icon-order.svg'),
      name: 'Заказы',
      href: 'order-list.html'
    },
    {
      icon: require('views/components/header/img/icon-help.svg'),
      name: 'Поддержка',
      href: '#'
    },
    {
      icon: require('views/components/header/img/icon-gear.svg'),
      name: 'Настройки',
      href: '#'
    },
    {
      icon: require('views/components/header/img/icon-logout.svg'),
      name: 'Выйти',
      href: '#'
    }
  ]
}

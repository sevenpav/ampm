module.exports = {
  tabs: ['Акции', 'Магазин', 'История'],
  tags: [
    'Все',
    'Новинки',
    'Популярные',
    'На все случаи',
    'Электроника',
    'Косметика',
    'Детские товары',
    'Ювелирные украшения',
    'Услуги',
    'Красота и здоровье',
    'Подарки',
    'Аксессуары',
    'Книги',
    'Одежда и обувь',
    'Товары для дома',
    'Развлечения',
    'Спорт',
    'Продукты',
    'Путешествия'
  ],
  categoryItems: [
    {
      img: require('views/components/bonus-tabs/img/category-items/item-1.png'),
      name: 'Giftery Card'
    },
    {
      img: require('views/components/bonus-tabs/img/category-items/item-2.png'),
      name: 'Л’Этуаль'
    },
    {
      img: require('views/components/bonus-tabs/img/category-items/item-3.png'),
      name: 'LUSH'
    },
    {
      img: require('views/components/bonus-tabs/img/category-items/item-4.png'),
      name: 'Детский мир'
    },
    {
      img: require('views/components/bonus-tabs/img/category-items/item-5.png'),
      name: 'SUNLIGHT'
    },
    {
      img: require('views/components/bonus-tabs/img/category-items/item-6.png'),
      name: 'Wildberries'
    }
  ],
  writeOffTable: {
    thead: [
      'Дата списания',
      'Название сертификата',
      'Сумма бонусов',
      'Номинал',
      'Ссылка'
    ],
    tbody: ['20.12.19', 'ЛитРес', '2 500', '2 500', '<a href="#">Подробнее</a>']
  },
  enrollmentTable: {
    thead: [
      'Дата создания',
      'Дата утверждения',
      'Название',
      'Статус',
      'Сумма бонусов'
    ],
    tbody: ['20.12.19', '21.12.19', 'ЛитРес', 'Новая', '2 500']
  }
}

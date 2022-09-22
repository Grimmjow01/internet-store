'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        login: 'User',
        email: 'user1@mail.ru',
        password: '$2b$08$J8BN/9Opwe/dYQ6KyBYUiOn/glrXyCpeJgf7vlS6OpryY8EvLPFOy', //password - 123456
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'User',
        email: 'user2@mail.ru',
        password: '$2b$08$J8BN/9Opwe/dYQ6KyBYUiOn/glrXyCpeJgf7vlS6OpryY8EvLPFOy', //password - 123456
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Admin',
        email: 'admin@mail.ru',
        password: '$2b$08$J8BN/9Opwe/dYQ6KyBYUiOn/glrXyCpeJgf7vlS6OpryY8EvLPFOy', //password - 123456
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Seller',
        email: 'seller@mail.ru',
        password: '$2b$08$J8BN/9Opwe/dYQ6KyBYUiOn/glrXyCpeJgf7vlS6OpryY8EvLPFOy', //password - 123456
        role: 'seller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const brands = [
      {
        name: "IKEA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Мебель-Стиль",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Williams-Sonoma",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Король диванов",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Аскона",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Русскуя мебельная компания",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Орма Мебель",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const types = [
      {
        name: 'Мебель для спальни',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мягкая мебель',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мебель для кухни',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мебель для бизнеса',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мебель для гостиной',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мебель для детской',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Столы и стулья',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Спецзаказы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    const ratings = [
      {
        user_id: 1,
        product_id: 2,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        product_id: 3,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        product_id: 5,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]


    const products = [
      {
        name: 'Кухня в современном стиле',
        price: 20000,
        rating: 4,
        description: '',
        type_id : 1,
        brand_id: 2,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Спальный гарнитур на заказ',
        price: 30000,
        rating: 4,
        description: '',
        type_id : 2,
        brand_id: 6,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Спальный гарнитур',
        price: 24000,
        rating: 3,
        description: '',
        type_id : 5,
        brand_id: 2,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Спальный гарнитур',
        price: 1000,
        rating: 4,
        description: '',
        type_id : 1,
        brand_id: 2,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Шкаф',
        price: 2000,
        rating: 4,
        description: '',
        type_id : 7,
        brand_id: 3,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Стол-комод',
        price: 900,
        rating: 2,
        description: '',
        type_id : 5,
        brand_id: 1,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Тумбочкa',
        price: 1000,
        rating: 5,
        description: '',
        type_id : 2,
        brand_id: 3,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Туалетный столик',
        price: 3000,
        rating: 2,
        description: '',
        type_id : 4,
        brand_id: 6,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Кровать',
        price: 240000,
        rating: 4,
        description: '',
        type_id : 3,
        brand_id: 5,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кровать с мягким изголовьем',
        price: 2,
        rating: 4,
        description: '',
        type_id : 7,
        brand_id: 4,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Зеркало',
        price: 21000,
        rating: 4,
        description: '',
        type_id : 3,
        brand_id: 6,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Диван',
        price: 40000,
        rating: 4,
        description: '',
        type_id : 2,
        brand_id: 3,
        start_date: new Date(),
        end_date: new Date(),   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    const productsinfos = [
      {
        product_id: 1,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 4,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 5,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 6,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 7,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 8,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 9,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 10,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 11,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 12,
        title: 'Мебель в гостиную стиле Прованс',
        description: 'Разработка проекта в соответствии с общим композиционным замыслом интерьера гостиной, в соответствии со вкусами и потребностями заказчика.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    const comments = [
      {
        id: 1,
        product_id: 1,
        user_id: 1,
        content: 'Заказали мебель для дочек, они рады. Качество отличное, но все равно считаю немного дороговато по цене. Хорошо хоть сэкономили на доставке: у фабрики есть пункт самовывоза. Ехать правда в Ленинградскую область (Всеволожский район), но для нас это не составило особых трудностей',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        product_id: 2,
        user_id: 1,
        content: 'Решил написать отзыв спустя месяц использования)) пока что все хорошо, проблем никаких не было ни на этапах оформления заказа, ни при доставке. Сама тахта хорошая.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        product_id: 3,
        user_id: 1,
        content: 'Заказывали через менеджера, прекрасная девушка, зовут Маргарита. Оформили быстро заказ и уже через 3 дня я была довольна доставкой. До этого момента все складывалось удачно, НО! Как это и бывает)) ничего не бывает идеально. Возникли проблемы со сборкой. Мы с мужем целый вечер убили на то, чтобы ее собрать. Детали не пронумерованы, никак не обозначены. Инструкция тоже странная. Пришлось все собирать буквально на глаз. И вот спустя часы мучений собрали! Моя мечта сбылась! Все остальное меня более, чем устраивает. Спасибо))',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        product_id: 4,
        user_id: 1,
        content: 'Остановились на этом варианте именно из-за сроков доставки. В отличие от предложений других фирм этот вариант пришел к нам не через 2–3 недели, а через три дня',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        product_id: 5,
        user_id: 1,
        content: 'Заказывал в начале июля, привезли 22 числа. отдельное спасибо Маргарите за консультацию)) по товару все хорошо, пришло без каких-либо нареканий. цвет чуть-чуть светлее, чем на фото',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        product_id: 6,
        user_id: 1,
        content: 'Что ж, для своей цены неплохо. Из плюсов: 1, СТРОЙНИТ)). 2, среди аналогичных моделей это самое оптимальное решение цена-качество. 3, оно в полный рост. Для нас это было важно.  За свою цену пойдет.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        product_id: 7,
        user_id: 1,
        content: 'Спасибо, быстро привезли! нареканий к товару и услугам нет :)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        product_id: 9,
        user_id: 1,
        content: 'Все быстро собралось, очень доволен',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        product_id: 8,
        user_id: 1,
        content: 'Добрый день! Отличный товар, купил дочери в комнату. она довольна. единственное они продаются в комплекте=))))',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        product_id: 2,
        user_id: 1,
        content: 'Благодарю за оперативность-привезли быстро,грузчики работают профессионально!Диван смотрится очень красиво,мягкий и удобный!При сидении задняя спинка высокая-даже голове удобно.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        product_id: 10,
        user_id: 1,
        content: 'Очень хороший товар за свои деньги,собирается быстро,полный комплект.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        product_id: 11,
        user_id: 1,
        content: 'Добрый день! Отличный товар, купил дочери в комнату. она довольна. единственное они продаются в комплекте=))))',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        product_id: 12,
        user_id: 1,
        content: 'Спасибо, быстро привезли! нареканий к товару и услугам нет :)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        product_id: 2,
        user_id: 1,
        content: 'Заказали мебель для дочек, они рады. Качество отличное, но все равно считаю немного дороговато по цене.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        product_id: 2,
        user_id: 1,
        content: 'Решил написать отзыв спустя месяц использования)) пока что все хорошо, проблем никаких не было ни на этапах оформления заказа',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        product_id: 1,
        user_id: 1,
        content: 'Не очень понравилось мне качество оказанных услуг. НО! Сам товар супер! Стоит своих денег. Рекомендую.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        product_id: 2,
        user_id: 1,
        content: 'Товар не плохой, но заявленные фотографии не соответствует. схемы по сборки на сайте нету.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    await queryInterface.bulkInsert('Users', users);
    await queryInterface.bulkInsert('Types', types);
    await queryInterface.bulkInsert('Brands', brands);
    await queryInterface.bulkInsert('Products', products);
    await queryInterface.bulkInsert('ProductInfos', productsinfos);
    await queryInterface.bulkInsert('Ratings', ratings);
    await queryInterface.bulkInsert('Comments', comments);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

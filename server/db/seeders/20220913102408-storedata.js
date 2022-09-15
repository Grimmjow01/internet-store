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
        img: '',
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
        img: '',
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
        img: '',
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
        img: '',
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
        img: '',
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
        img: '',
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
        img: '',
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
        img: '',
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
        img: '',
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
        img: '',
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
        img: '',
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
        img: '',
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

    await queryInterface.bulkInsert('Users', users);
    await queryInterface.bulkInsert('Types', types);
    await queryInterface.bulkInsert('Brands', brands);
    await queryInterface.bulkInsert('Products', products);
    await queryInterface.bulkInsert('ProductInfos', productsinfos);
    await queryInterface.bulkInsert('Ratings', ratings);
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

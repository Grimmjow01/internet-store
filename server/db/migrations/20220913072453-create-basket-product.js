'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BasketProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      basket_id: {
        references: {
          model: 'Baskets',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      product_id: {
        references: {
          model: 'Products',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BasketProducts');
  }
};
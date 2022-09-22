'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING
      },
      email: {
        unique: true,
        type: Sequelize.STRING,
        required: true,
      },
      password: {
        type: Sequelize.STRING
      },
      isActivated: { 
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      activationLink: { 
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Users');
  }
};
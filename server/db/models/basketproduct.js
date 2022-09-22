'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasketProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Basket, { foreignKey: 'basket_id' });
      this.belongsTo(models.Product, { foreignKey: 'product_id' });    
    }
  }
  BasketProduct.init({
    basket_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BasketProduct',
  });
  return BasketProduct;
};
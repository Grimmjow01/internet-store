'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    this.hasOne(models.BasketProduct, { foreignKey: 'product_id' });
    this.belongsTo(models.Brand, { foreignKey: 'brand_id' });
    this.belongsTo(models.Type, { foreignKey: 'type_id' });
    this.hasMany(models.ProductInfo, { foreignKey: 'product_id' });
    this.hasMany(models.Rating, { foreignKey: 'product_id' });
  }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    img: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
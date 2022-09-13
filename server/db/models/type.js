'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: 'type_id' });
      // this.belongsToMany(models.Brand, {through: 'TypeBrand', foreignKey: 'type_id'});
    }
  }
  Type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food_drink_pair extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      food_drink_pair.belongsTo(models.Food)
      food_drink_pair.belongsTo(models.Drink)
    }
  };
  food_drink_pair.init({
    FoodId: DataTypes.INTEGER,
    DrinkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'food_drink_pair',
  });
  return food_drink_pair;
};
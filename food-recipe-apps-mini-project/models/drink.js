'use strict';
const {
  Model
} = require('sequelize');
const food_drink_pair = require('./food_drink_pair');
module.exports = (sequelize, DataTypes) => {
  class Drink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Drink.belongsToMany(models.Food, { through: 'models.food_drink_pair'})
    }
  };
  Drink.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty: 'Name must be filled!'
      }
    },
    ingredients: {

      type : DataTypes.STRING,
      validate : {
        notEmpty : 'Ingredients must be filled'
      }
      
    },
    steps: {
      type:  DataTypes.STRING,
      validate : {
        notEmpty: "Ingredients must be filled"
      }
    },
    time: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: "Please Choose Perfect Serving Time for Drink"
      }
    },
    hot_or_cold: {

      type: DataTypes.STRING,
      validate : {
        notEmpty: "Please choose one!"
      }
    },
    image: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: "Please insert image URL"
      },
        isUrl: {
          message: 'insert url'
        }
    },
    people: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty:{
          message: 'Number of people must be filled'
        },
        isNumeric: {
          message:'People must be an integer'
        }
      }
    }
  },
  {
    sequelize,
    modelName: 'Drink',
    hooks : {
          beforeCreate(drink,options){
            drink.image = 'https://i.stack.imgur.com/y9DpT.jpg'
          }
        }
  });
  return Drink;
};
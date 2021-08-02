'use strict';
const {
  Model
} = require('sequelize');
const food_drink_pair = require('./food_drink_pair');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Food.belongsToMany(models.Drink, { through: 'models.food_drink_pair'
      })

    }
  };

  Food.init({
    name: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {
          // don't allow empty strings
          message: 'Name must be filled!'

        },           
      }
    },
    ingredients: {

      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: 'Name must be filled!'
        }
      }

    },
    steps: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          message: 'Name must be filled'
        }
      }
    },
    time: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          message: 'Choose one!'
        }
      }
    },
    kind: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {
          message: 'Please Choose One!'
        }
      }
    },

    image: {
      type: DataTypes.STRING,
      validate :{
        notEmpty: {
          message: 'Insert image URL'
        },
        isUrl: {

          message: 'insert url'

        }
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
    modelName: 'Food',
    
    hooks : {
      beforeCreate(food,options){
        food.image = 'https://i.stack.imgur.com/y9DpT.jpg'
      }
    }
    
  });
  return Food;
};
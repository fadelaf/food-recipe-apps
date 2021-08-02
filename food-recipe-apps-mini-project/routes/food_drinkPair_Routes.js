const route = require('express').Router()
const FoodDrinkPairController = require('../controller/fdPairController.js')



route.get('/', FoodDrinkPairController.pairList)
route.get('/addPair', FoodDrinkPairController.addPairPage)
route.post('/addPair', FoodDrinkPairController.addPair)


module.exports = route
const route = require('express').Router()
const FoodController = require('../controller/FoodController')



route.get('/', FoodController.halfShow)
route.get('/add', FoodController.addPage)
route.get('/detail/update/:id', FoodController.updatePage)
route.get('/detail/:id', FoodController.findById)
route.get('/detail/delete/:id', FoodController.delete)
route.post('/detail/update/:id', FoodController.update)
route.post('/add', FoodController.add)

// route.post('/detail/update/:id/drinkRec/:id', FoodController.drinkRec)

module.exports = route
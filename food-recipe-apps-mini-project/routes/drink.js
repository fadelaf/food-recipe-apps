const route = require('express').Router()
const FoodController = require('../controller/FoodController')
const DrinkController = require('../controller/DrinkController')



route.get('/', DrinkController.halfShow)
route.get('/add', DrinkController.addPage)
route.get('/detail/update/:id', DrinkController.updatePage)
route.get('/detail/:id', DrinkController.findById)
route.get('/detail/delete/:id', DrinkController.delete)
route.post('/add', DrinkController.add)
route.post('/detail/update/:id', DrinkController.update)

module.exports = route
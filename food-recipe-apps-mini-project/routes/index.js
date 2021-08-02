const route = require('express').Router()
const DrinkController = require('../controller/DrinkController')
const FoodController = require('../controller/FoodController')
// const FoodDrinkPairController = require('../controller/FoodDrinkPairController')


// route.get('/',(req,res)=>{
//     res.json({
//         Home: 'hello world'})
// } )

const FoodRouter = require('./food')
const DrinkRouter = require('./drink')
const FoodDrinkRouter = require('./food_drinkPair_Routes')
route.get('/', (req,res)=>{
    res.render('index.ejs')
})
// route.get('/', DrinkController.halfShow)
route.use('/foods', FoodRouter)
route.use('/drinks', DrinkRouter)
route.use('/foodDrinkPair', FoodDrinkRouter)

// klo ketemu cannot get di routernya.


module.exports = route
const { food_drink_pair, Food, Drink } = require('../models')

class FoodDrinkPairController {

    static async show(req, res){

        try{
            let result = await food_drink_pair.findAll({
                include : [
                    Food , Drink
                ]
            })

            res.status(200).json(result)

        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static addPairPage(req,res){
        res.render('addPair.ejs')
    }

    static async addPair(req,res){
        try{
            // const FoodId = +req.params.FoodId
            // const { drink_name } = req.body;
            const { food_name, drink_name } = req.body;
            const drink = await Drink.findOne({
                where: {
                    name: drink_name
                }
            })

            const food = await Food.findOne({
                where: {
                    name: food_name
                }
            })


            let DrinkId = drink.id
            let FoodId = food.id
            // res.json(pair)
            let result = await food_drink_pair.create({
                FoodId, DrinkId
            })
            res.redirect('/foodDrinkPair')
            // return result
        }
        catch(err){
            res.status(500).json(err)
        }
    }


    static async pairList(req, res){
        try{
            const FoodId = +req.params.FoodId
            let food = await food_drink_pair.findAll({

                include : [
                    Food, Drink
                ]
            
            
            })

            res.render('pairPage.ejs',{food})
        }
        catch(err){

            res.json(err)

        }
    }

}

module.exports = FoodDrinkPairController
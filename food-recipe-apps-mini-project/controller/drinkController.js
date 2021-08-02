const { Drink, Food } = require('../models')

class DrinkController{

    static halfShow(req,res){

        Drink.findAll({

            attributes : ["id","name", "ingredients", "steps", "image"]

        })
            .then(drink => {
                // res.status(200).json(drink)
                res.render('drink.ejs',{drink})
            })
        
            .catch(err =>{
                res.json(err)
            })

    }

    // static fullShow(req,res){

    //     Drink.findAll()
    //         .then(drink =>{
    //             res.status(200).json(drink)
    //         })
    //         .catch(err => {
    //             res.json(err)
    //         })


    // }

    static findById(req,res){

        const id = +req.params.id
        
        Drink.findByPk(id)
            .then(drink => {
                // res.status(200).json(drink)
                res.render('drinkDetail.ejs', {drink})
            })
            .catch(err => {
                res.json(err)
            })

    }


    static addPage(req,res){
        let err = false
        res.render('drinkAdd.ejs', {err})
    }

    static add(req,res){

        const { name, ingredients, steps, time, hot_or_cold, image, people} = req.body

        Drink.create({

               
            name : name,
            ingredients: ingredients,
            steps: steps,
            time: time,
            hot_or_cold: hot_or_cold,
            image: image,
            people: +people


    })  
    .then(drink => {
        res.redirect('/drinks')
    })
    .catch(err => {
        res.json(err)
    })




    }


    static delete(req, res){

        const id = +req.params.id

        Drink.destroy({

            where : {
                id : id
            }

        })
        .then(drink => {
            res.redirect('/drinks')
        })
        .catch(err =>{
            res.json(err)
        })

    
    }

    static updatePage(req, res){

        let err = false        
        const id = +req.params.id

        Drink.findByPk(id)
         .then(drink => {
             res.render('drinkUpdate.ejs',{drink})
         })
         .catch(err => {
             res.json(err)
         })

    }

    static update(req, res){

        const id = +req.params.id

        const {name, ingredients, steps, time, hot_or_cold, image, people } = req.body

        Drink.update({

            name: name,
            ingredients: ingredients,
            steps: steps,
            time: time,
            hot_or_cold: hot_or_cold,
            image: image,
            people: +people

        },
        {
            where: 
            {id : id}
        }
        )
        .then( drink => {
            res.redirect(`/drinks/detail/${id}`)
        })
        .catch( err =>{
            res.json(err)
        })
     
    }
}

module.exports = DrinkController
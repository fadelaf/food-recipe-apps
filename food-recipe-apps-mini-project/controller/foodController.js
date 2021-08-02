const { Food , Drink} = require('../models')
const { FoodDrinkController } = require('./fdPairController')

class FoodController{

        // buat munculin di halaman utama
        static halfShow(req,res){

            Food.findAll({
                attributes: ['id','name','image']
            })
            .then(food => {
                // res.status(200).json(food)
                res.render('food.ejs', {food})
            })
            .catch(err =>{
                res.json(err)
            })


        }

        // buat munculin di halaman lebih detail
        // static fullShow(req,res){

        //     Food.findAll()
        //     .then(food =>{
        //         res.status(200).json(food)
        //     })
        //     .catch(err => {
        //         res.json(err)
        //     })


        // }

        static findById(req,res){

            const id = +req.params.id


            Food.findByPk(id)
            .then(food => {
                // res.status(200).json(food)
                res.render('foodDetail.ejs',{food})
            })
            // // .then(food => {
            // //     res.status(200).json(food)
            // // })
            .catch(err =>{
                 res.json(err)
            })

            // Food.findByPk(id, {

            //     include: {
            //         model: Drink
            //     }
                
            // })
            // .then(food => {
            //     res.status(200).json(food)
            //     // res.render('foodDetail.ejs',{food})
            // })
            // // .then(food => {
            // //     res.status(200).json(food)
            // // })
            // .catch(err =>{
            //      res.json(err)
            // })


            // Food.findOne({
                
            //     include:{ 

            //     },
                
            //     where :{ 
            //         id:id 
            //     }
            // })

        }

        static addPage(req, res){
            let err = false
            res.render('foodAdd.ejs', {err})

        }
        

        static add(req,res){
            
            const { name, ingredients , steps , time, kind, image, people } = req.body

            Food.create({

                
                    name : name,
                    ingredients: ingredients,
                    steps: steps,
                    time: time,
                    kind: kind,
                    image: image,
                    people: +people
    
            })  
            .then(food => {
                // res.json(food)
                res.redirect('/foods')
            })
            
            .catch(err => {

                // res.redirect('/foods/add')
                res.render('foodAdd.ejs', {err})

            })
        
        }

        static delete(req, res){

            const id = +req.params.id

            Food.destroy({

                where : {
                    id : id
                }

            })
            .then(food => {
                res.redirect('/foods')
            })
            .catch(err =>{
                res.json(err)
            })

        

        }

        static updatePage(req, res){

            let err = false        
            const id = +req.params.id

            Food.findByPk(id)
             .then(food => {
                 res.render('foodUpdate.ejs',{food})
             })
             .catch(err => {
                 res.json(err)
             })

        }

        static update(req, res){

            const id = +req.params.id

            const {name, ingredients, steps, time, kind, image, people } = req.body

            Food.update({

                name: name,
                ingredients: ingredients,
                steps: steps,
                time: time,
                kind: kind,
                image: image,
                people: +people

            },
            {
                where: 
                {id : id}
            }
            )
            .then( food => {
                res.redirect(`/foods/detail/${id}`)
            })
            .catch( err =>{
                res.json(err)
            })
            
        }

        // static drinkRec(req, res){

        //     const id = +req.params.id
        //     const { drink } = req.body            
        //     FoodDrinkPairController.addPair(id,drink,req,res)
        // }
        

}

module.exports = FoodController
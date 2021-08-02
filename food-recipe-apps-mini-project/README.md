API DOCUMENTATION

Food Recipe Apps is an application to share food and drink recipe with others

THEME

Food and Drink

--- Food ---

GET '/foods'
show some attributes from Food recipe data

    Request:
        Head: none
        Body: none   

    Response: 

        -Success:

                [{
                    
                    id: <food.id>
                    name: <food.name>
                    image: <food.image>

                }]

        
        -Error:

                [{
                    message: error
                }]

GET '/foods/add'
get in to add form for adding new recipe
        

GET '/foods/detail/:id
get full Food recipe data based on id

    Request:
        Head: id
        body: none

    Response:
                -Success (200):

                    [{
                        
                        id: <food.id>
                        name: <food.name>
                        ingredients: <food.ingredients>
                        steps: <food.steps>
                        time: <food.time>
                        kind: <food.kind>
                        people: <food.people>
                        image: <food.image>


                    }]

            
                -Error (500):

                    [{
                    
                        message: error
                    
                    }]

GET '/foods/detail/update/:id
get form for updating Food recipe data by id

    Request:
        Head: id
        body: id,name,ingredients,time,kind,people,image

    Response:
                Success(200):

                    [{
                        
                        id: <food.id>
                        name: <food.name>
                        ingredients: <food.ingredients>
                        steps: <food.steps>
                        time: <food.time>
                        kind: <food.kind>
                        people: <food.people>
                        image: <food.image>


                    }]

            
                -Error (500):

                    [{
                    
                        message: error
                    
                    }]

GET '/foods/detail/delete/:id
deleting a food recipe data by id

        Request:
        Head: id
        body: none

    Response:   

        Success(200):        

                    [{            }]


POST '/foods/add

post in to add form for adding new recipe

    Request:
        Head: none
        Body: id,name,ingredients,time,kind,people,image   

    Response:

                -Success (200):

                    [{
                        
                        id: <food.id>
                        name: <food.name>
                        ingredients: <food.ingredients>
                        steps: <food.steps>
                        time: <food.time>
                        kind: <food.kind>
                        people: <food.people>
                        image: <food.image>


                    }]

                -Error:

                    [{
                        message: error
                    }]
        

POST '/foods/detail/update/:id
post form data for updating Food recipe data by id

    Request:
        Head: id
        body: id,name,ingredients,time,kind,people,image

    Response:
                Success(200):

                    [{
                        
                        id: <food.id>
                        name: <food.name>
                        ingredients: <food.ingredients>
                        steps: <food.steps>
                        time: <food.time>
                        kind: <food.kind>
                        people: <food.people>
                        image: <food.image>


                    }]

            
                -Error (500):

                    [{
                    
                        message: error
                    
                    }]


--- Drink ---

GET '/drinks'
show some attributes from Food recipe data

    Request:
        Head: none
        Body: none   

    Response: 

        -Success:

                [{
                    
                    id: <drink.id>
                    name: <drink.name>
                    image: <drink.image>

                }]

        
        -Error:

                [{
                    message: error
                }]



GET '/drinks/add'
get in to add form for adding new recipe
        


GET '/drinks/detail/:id
get full drink recipe data based on id

    Request:
        Head: id
        body: none

    Response:
                -Success (200):

                    [{
                        
                        id: <food.id>
                        name: <food.name>
                        ingredients: <food.ingredients>
                        steps: <food.steps>
                        time: <food.time>
                        kind: <food.kind>
                        people: <food.people>
                        image: <food.image>


                    }]

            
                -Error (500):

                    [{
                    
                        message: error
                    
                    }]

GET '/drinks/detail/update/:id
get form for updating drink recipe data by id


GET '/drinks/detail/delete/:id
deleting a drink recipe data by id

        Request:
        Head: id
        body: none

    Response:   

        Success(200):        

                    [{            }]


POST '/drinks/add

post in to add form for adding new recipe

    Request:
        Head: none
        Body: id,name,ingredients,time,hot_or_cold,people,image   

    Response:

                -Success (200):

                    [{
                        
                        id: <drink.id>
                        name: <drink.name>
                        ingredients: <drink.ingredients>
                        steps: <drink.steps>
                        time: <drink.time>
                        hot_or_cold: <drink.hot_or_cold>
                        people: <drink.people>
                        image: <drink.image>


                    }]


                -Error:

                    [{
                        message: error
                    }]
        

POST '/drinks/detail/update/:id
post form data for updating Drink recipe data by id

    Request:
        Head: id
        body: id,name,ingredients,time,hot_or_cold,people,image

    Response:
                Success(200):

                    [{
                        
                        id: <drink.id>
                        name: <drink.name>
                        ingredients: <drink.ingredients>
                        steps: <drink.steps>
                        time: <drink.time>
                        kind: <drink.kind>
                        people: <drink.people>
                        image: <drink.image>


                    }]

            
                -Error (500):

                    [{
                    
                        message: error
                    
                    }]



-- Food Drink Pair ---


GET '/foodDrinkPair'
    Request:
            Head: none
            body: none


    Response: Success(200):

[{
                
                
    {
        "id": <food_drink_pair.id>,
        "FoodId": <food_drink_pair.FoodId>,
        "DrinkId": <food_drink_pair.DrinkId>,
        "Food": {
            id: <food.id>,
            name: <food.name>,
            ingredients: <food.ingredients>
            time: <food.time>
            kind: <food.kind>
            image: <food.image>
            people: <food.people>
        },
        "Drink": {
            id: <drink.id>
            name: <drink.name>
            ingredients: <drink.ingredients>
            steps: <drink.steps>
            time: <drink.time>
            hot_or_cold: <drink.hot_or_cold>
            people: <drink.people>
            image: <drink.image>


        }
    }

}]        

GET '/foodDrinkPair/addPair'
Menampilkan Halaman Add Pair


POST '/foodDrinkPair/addPair'

    Request:
        Head: none
        body: food_name, drink_name

    Response:
        
        [{
            FoodId : <food.id>
            DrinkId : <drink.id> 

        }]

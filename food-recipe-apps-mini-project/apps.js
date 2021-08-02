const express = require('express')
const app = express()
const port = 4001


app.set('view engine','ejs')
app.use(express.urlencoded({ extended : true}))
app.use(express.json())
const routes = require('./routes')
app.use(routes)

app.listen(port, ()=>{
    console.log('Listening to the Port',port)
})
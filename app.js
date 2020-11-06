

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const contactRoute = require('./router')

const app = express()

// set ejs 
app.set('view engine','ejs')


let middleware = [
    morgan('dev'),
    express.urlencoded({extended:true}),
    express.json()
]

app.use(middleware)

app.use('/contacts',contactRoute)


app.get('*',(req,res) =>{
    res.send('Please type valid address its 404')
})


const PORT = process.env.PORT || 3109
mongoose.connect('mongodb+srv://ismailkhandokar0:01995576173@cluster0.vn7sd.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true
})
    .then(() =>{
        app.listen(PORT,() =>{
            console.log(`SERVER IS RUNNING ${PORT}`)
        })
    })
    .catch(err =>{
        console.log(err)
    })














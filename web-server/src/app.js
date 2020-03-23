const express = require('express')
const path  = require('path')
const hbs  = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()

//Define paths for express configs
const publicDirPath = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,'../template/partials')


//Setup handlesbars engine and views location
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)
//Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Ayush'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title:'Help Page',
        helpfulText:'This is some helpful text',
        name:'Ayush'
    })
})

app.get('/about', (req, res)=>{
res.render('about', {
    title: 'About Page',
    name:'Ayush'
})
})

app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error:'Must include an address'
        })
    }

    geocode(req.query.address, (error,{location, latitude,longitude}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude, (error, forecastData)=>{
            if(error){
                return res.send({error})
            }   
            res.send({
                location,
                forecast:forecastData,
                address: req.query.address
            })
        })
        
    })
    

    // res.send({
    //     location: 'Philadelphia',
    //     forecast: 'Light rain',
    //     address:req.query.address
    // })
})  

app.get('/product', (req,res)=>{
    if(!req.query.search){
        
        return res.send({
            error: 'Must provide a search term'
        })
        
    }

    
    res.send({
        products:[]
    })
})

app.get("/help/*", (req,res)=>{
    res.render('404',{
        title: '404 page',
        name:'Ayush',
        errorMessage:'Help article not found'
    })
})
app.get("*", (req,res)=>{
    res.render('404',{
        title: '404 page',
        name:'Ayush',
        errorMessage:'Page not found'
    })
})


app.listen(3000, ()=>{
    console.log("Server is working on port 3000");
    
})
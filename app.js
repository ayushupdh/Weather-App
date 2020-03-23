const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if(!process.argv[2]){
    return console.log("Please provide the location")
}
const location  = process.argv[2]


geocode(location, (error,{location, latitude, longitude})=>{
    if(error){
        return console.log('Error', error)
    }

    
    forecast(latitude, longitude, (error, forecastData) => {
        if(error){
            return console.log('Error', error)
        }
        console.log(location);
        console.log(forecastData)
      })
})


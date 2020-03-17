const request = require('request')
const key = require('./key')


const forecast = (lat, long, callback)=>{
    const url = 'https://api.darksky.net/forecast/'+encodeURIComponent(key.forecastkey)+'/'+encodeURIComponent(lat)+','+encodeURIComponent(long)
    request({ url: url, json: true }, (error, response) => {

    if (error) {
        callback("App stopped working", undefined)
    }
    else if (response.body.error) {
       callback(response.body.error,undefined)
    }
    else {
        callback(undefined,{
            tempString: response.body.daily.data[0].summary + "The temp is " + response.body.currently.temperature + " degree with a chance of " + response.body.currently.precipProbability + "% rain."
        })

    }
    })
}

module.exports = forecast
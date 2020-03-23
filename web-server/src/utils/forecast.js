const request = require('request')
const key = require('./key')


const forecast = (lat, long, callback)=>{
    const url = 'https://api.darksky.net/forecast/'+encodeURIComponent(key.forecastkey)+'/'+encodeURIComponent(lat)+','+encodeURIComponent(long)
    request({ url, json: true }, (error, {body}) => {

    if (error) {
        callback("App stopped working", undefined)
    }
    else if (body.error) {
       callback(body.error,undefined)
    }
    else {
        callback(undefined,
            body.daily.data[0].summary + "The temp is " + body.currently.temperature + " degree with a chance of " + body.currently.precipProbability + "% rain.")

    }
    })
}

module.exports = forecast
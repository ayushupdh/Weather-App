const request = require('request')
const key = require('./key')



const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token='+encodeURIComponent(key.geocodekey)+'&limit=1'

    request({url, json : true}, (error, {body})=>{
        if(error){
            callback("app stopped working", undefined)
        }else if(body.features.length ===0){
                callback("Unable to find any matching location. Enter a new address",undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })

        }

    })
}
module.exports = geocode
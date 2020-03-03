const request = require('request')

const url = 'https://api.darksky.net/forecast/41436de30dc80da0c5726cfca0dca5ab/-70,-122.4233'

request({url : url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})
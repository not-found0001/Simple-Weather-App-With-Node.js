const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast//' + latitude + ',' + longitude + '?units=si'
    request({url, json:true}, (error, response) => {
        if(error){
            callback('Unable To Connect Weather Service', {
                weather: undefined,
                temperature: undefined,
                rainPossibility: undefined
            })
        }
        else if(response.body.error){
            callback('Location Not Found', {
                weather: undefined,
                temperature: undefined,
                rainPossibility: undefined
            })
        }
        else{
            callback('', {
                weather: response.body.currently.summary,
                temperature: response.body.currently.temperature,
                rainPossibility: response.body.currently.precipProbability
            })
        }
    })
}

module.exports = forcast
const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=&limit=1'
    request({url, json:true}, (error, response) => {
        if(error){
            callback('Unable To Connect Weather Service', {
                latitude: undefined,
                longitude: undefined,
                location: undefined
            })
        }
        else if(response.body.features.length === 0){
            callback('Location Not Found', {
                latitude: undefined,
                longitude: undefined,
                location: undefined
            })
        }
        else{
            callback('', {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
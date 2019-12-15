const request = require('request')

const setAddress = function(Address) {

    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + Address + '.json?{give your access token}&limit=1'

    request({url: geocodeURL, json: true}, (error, response) => {
        if(error){
            console.log('Unable To Connect Weather Service.')
        }
        else if(response.body.features.length === 0){
            console.log('Unable To Find Location.Please Try Another Location.')
        }
        else{
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]

            console.log(latitude, longitude)

            const darkSkyURL = 'https://api.darksky.net/forecast/{give your access token}/' + latitude + ',' + longitude + '?'

            request({url: darkSkyURL, json: true}, (error, response) => {
                if(error){
                    console.log('Unable To Connect Weather Service.')
                }
                else if(response.body.error){
                    console.log('Unable To Find Location.')
                }
                else{
                    console.log('Location: ' + Address)
                    console.log(response.body.currently)
                }
            })
        }
    })
}

module.exports = {
    setAddress
}

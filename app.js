const yargs = require('yargs')
const geocode = require('./utils/geocode.js')
const forcast = require('./utils/forcast.js')

yargs.command({
    command: 'search',
    describe: 'search a location',
    builder: {
        address: {
            describe: 'set address',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        geocode(argv.address, (error, {latitude, longitude, location}) => {
            if(error){
                return console.log(error)
            }

            console.log('Location : ' + location)

            forcast(latitude, longitude, (error, {temperature, weather, rainPossibility}) => {
                if(error){
                    return console.log(error)
                }
                console.log('Temparature ' + temperature + ' Degree Celcius')
                console.log('Weather Condition ' + weather)
                console.log('Rain Possibility ' + rainPossibility + ' %')
            })
        })
    }
})

yargs.parse()
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
        geocode(argv.address, (error, data) => {
            if(error){
                return console.log(error)
            }

            console.log(data.location)

            forcast(data.latitude, data.longitude, (error, data) => {
                if(error){
                    return console.log(error)
                }
                console.log('Temparature ' + data.temperature + ' Degree Celcius')
                console.log('Weather Condition ' + data.weather)
                console.log('Rain Possibility ' + data.rainPossibility)
            })
        })
    }
})

yargs.parse()
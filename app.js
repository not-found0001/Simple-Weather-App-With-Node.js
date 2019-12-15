const yargs = require('yargs')
const myObj = require('./info.js')

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
        myObj.setAddress(argv.address)
    }
})

yargs.parse()
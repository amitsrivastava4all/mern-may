const winston = require('winston');
const { level } = require('winston');
const options = {
    level:'debug',
    format:winston.format.combine(
        winston.format.timestamp({format:'YYYY-MM-DD HH:MM:SS'}),
        winston.format.json()
    ),
    transports:[
        new winston.transports.File({
            filename:'error.log'
        })
        /*
        new winston.transports.File({
            filename:'error.log', level : 'error'
        }),
        new winston.transports.File({
            filename:'debug.log', level : 'debug'
        })*/

    ]
}


const logger = winston.createLogger(options);
module.exports = logger;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./routes/userroutes'));
const logger = require('./utils/logger');
app.listen(process.env.PORT || 1234,()=>{
    console.log('Server Start');
    logger.debug('Server Start');
});
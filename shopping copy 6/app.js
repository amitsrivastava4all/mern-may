const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
console.log('Type of express ',typeof express);
const app = express();
const log = require('./utils/middlewares/log');
app.use(morgan('combined')); // it give lot of information
app.use(log); // Custom Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
//app.set('views','folderpath');
app.use('/',require('./routes/userroutes'));
app.use('/',require('./routes/usernextroute'));
app.use('/',require('./routes/roleroutes'));
app.use('/',require('./routes/rightroute'));
app.use('/',require('./routes/userroleroute'));
app.use('/',require('./routes/rolerightroutes'));
app.use('/order',require('./routes/orderroutes'));

app.use((req,res,next)=>{
    res.send('OOPS U Type Something Else,WRONG URL');
});
/*
app.get('/login',(req,res)=>{

});
app.post('/login',(req,res)=>{

})
*/

//console.log('Type of app ',typeof app);
//const e = express.static('public');
//console.log(e, ' type ',typeof e );
//app.use(e);
app.listen(process.env.PORT || 1234,()=>{
    console.log('Server Start');
});
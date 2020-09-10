const express = require('express');
const route = express.Router();
const logger = require('../utils/logger');
route.get('/register',(req,res)=>{
    let userid = req.query.userid;
    res.send(userid + " "+req.query.job);
});
route.post('/upload',(req,res)=>{
    const uploading = require('../utils/upload');
    uploading(req,res,err=>{
        if(err){
        console.log('err  ::: ',err);
            res.send('Error Occur in Uploading....');

        }
        else{
            res.send('File Uploaded....');
        }
    })
})
route.post('/register',(req,res)=>{
    logger.debug('Inside register route');
    let userid = req.body.userid;
let pwd  = req.body.pwd;
logger.debug('Accept Inside the Register Route'+userid);
const User  = require('../models/user');
const userObject = new User(userid, pwd);
const userHelper = require('../db/helpers/usercrud');
const promise = userHelper.register(userObject);
promise.then(doc=>{
   const sendMail = require('../utils/mail');
   sendMail('00xytyz00@gmail.com',res);
    // res.json({'message':'Register SuccessFully'});
}).catch(err=>{
    console.log('Promise Error is ',err);
    res.json(err);
    logger.error(err);
})
});

route.get('/profile/:userid/:job',(req,res)=>{
    let userid = req.params.userid;
    let job = req.params.job;

    res.send(userid + job);
});
route.post('/login',(req,res)=>{
let userid = req.body.userid;
let pwd  = req.body.pwd;
const User  = require('../models/user');
const userObject = new User(userid, pwd);
const userHelper = require('../db/helpers/usercrud');
// const promise =

userHelper.login(userObject, res);
// promise.then(data=>{
//     res.json(data);
// }).catch(err=>{
//     res.json(err);
// })
});

module.exports = route;
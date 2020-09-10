const express = require('express');
const route = express.Router();
route.get('/register',(req,res)=>{
    let userid = req.query.userid;
    res.send(userid + " "+req.query.job);
});

route.post('/register',(req,res)=>{
    let userid = req.body.userid;
let pwd  = req.body.pwd;
const User  = require('../models/user');
const userObject = new User(userid, pwd);
const userHelper = require('../db/helpers/usercrud');
const promise = userHelper.register(userObject);
promise.then(doc=>{
    res.json({'message':'Register SuccessFully'});
}).catch(err=>{
    res.json(err);
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
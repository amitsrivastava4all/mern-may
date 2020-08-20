const express = require('express');
const route = express.Router();

route.post('/login',(req,res)=>{
    var userid = req.body.userid;
    var pwd = req.body.pwd;
    res.render('dashboard',{'companyName':'Brain Mentors','uid':userid, 'msg':'Welcome'});
});
module.exports = route;
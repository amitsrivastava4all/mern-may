const express = require('express');
const route = express.Router();
route.post('/login',(req,res)=>{
    var userid = req.body.userid;
    var pwd = req.body.pwd;
    if(userid==pwd){
        res.send('Welcome Post '+userid);
    }
    else{
        res.send('Invalid Userid or pwd');
    }
    //res.send("Login Post");
});
route.get('/login2/:userid/:pwd',(req,res)=>{
    if(req.params.userid==req.params.pwd){
        res.send('Welcome '+req.params.userid);
    }
    else{
        res.send('Invalid Userid or Password');
    }
    //res.send("Login Post" );
});
route.get('/login',(req,res)=>{
    if(req.query.userid==req.query.pwd){
        res.send('Welcome '+req.query.userid);
    }
    else{
        res.send('Invalid Userid or Password');
    }
    //res.send("Login Post" );
});
route.get('/profile',(req,res)=>{
    res.send("Profile Get");
});
module.exports = route;
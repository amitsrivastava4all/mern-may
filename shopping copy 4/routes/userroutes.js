const express = require('express');
const route = express.Router();
route.get('/download',(req,res)=>{
    res.download('/Users/amit/Documents/rocket.png');
})
route.get('/api/userinfo',(req,res)=>{
    var obj = {id:1001, name:'Ram',salary:99999};


    res.redirect('/api/userinfo2?id='+obj.id+"&name="+obj.name);
    //res.json(obj);
});
route.get('/api/userinfo2',(req,res)=>{
    console.log(':::Request ',req.query.myobj);
    res.json({id:req.query.id,name:req.query.name});
});

// route.get('/redlogin',(req,res)=>{
//     var userid = req.body.userid;
//     var pwd = req.body.pwd;
//     res.render('dashboard',{'uid':userid, 'msg':'Welcome'});
// })
route.post('/login',(req,res,next)=>{
    var userid = req.body.userid;
    var pwd = req.body.pwd;
    console.log('LOGIN ::: Userid is ',userid, ' Password is ',pwd);
    if(userid==pwd){
        next();
        //res.redirect('/redlogin');
        //res.render('dashboard',{'uid':userid, 'msg':'Welcome'});
        /*const path =require('path');
        console.log(__dirname);
        const parentPath =path.normalize(__dirname+'/..');
        const fullPath = path.join(parentPath+"/public/dashboard.html");
        console.log(fullPath);
        res.sendFile(fullPath);*/
        //res.send('Welcome Post '+userid);
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
// route.get('/login',(req,res)=>{
//     if(req.query.userid==req.query.pwd){
//         res.send('Welcome '+req.query.userid);
//     }
//     else{
//         res.send('Invalid Userid or Password');
//     }
//     //res.send("Login Post" );
// });
route.get('/profile',(req,res)=>{
    res.send("Profile Get");
});
module.exports = route;
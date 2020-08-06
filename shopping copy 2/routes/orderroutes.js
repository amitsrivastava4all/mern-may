const express = require('express');
const route = express.Router();
route.get('/buy',(req, res)=>{
    res.send("Buy");
})
route.all('/profile',(req, res)=>{
    res.send("Product Profile");
});
// route.get('/se?a?rch',(req, res)=>{
//     res.send("RegEx Search");
// });
// route.get('/se+arch',(req, res)=>{
//     res.send("RegEx Search");
// });
route.get('/search*',(req, res)=>{
    res.send("RegEx Search");
});
module.exports = route;
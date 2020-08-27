const express = require('express');
const route = express.Router();
route.post('/addright',(request, response)=>{
    const Right = require('../models/right');
    let name = request.body.name;
    let descr = request.body.descr;
    let screenurl = request.body.screenurl;
    const roleObject = new Right(name, descr, screenurl);
    const rightcrud = require('../db/helpers/rightcrud');
    const promise = rightcrud.add(roleObject);
    promise.then(data=>{
        response.json({message:'Right Added SuccessFully'});
    }).catch(err=>{
        response.json({message:'Error During Right Add'});
        console.log('Err ',err);
    })
});
route.get('/searchrole',(request, response)=>{

});
module.exports = route;
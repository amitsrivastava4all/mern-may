const express = require('express');
const route = express.Router();
route.post('/addrole',(request, response)=>{
    const Role = require('../models/role');
    let name = request.body.name;
    let descr = request.body.descr;
    const roleObject = new Role(name, descr);
    const rolecrud = require('../db/helpers/rolecrud');
    const promise = rolecrud.add(roleObject);
    promise.then(data=>{
        response.json({message:'Role Added SuccessFully'});
    }).catch(err=>{
        response.json({message:'Error During Role Add'});
        console.log('Err ',err);
    })
});
route.get('/searchrole',(request, response)=>{

});
module.exports = route;
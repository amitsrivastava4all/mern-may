const express = require('express');
const route = express.Router();
route.post('/addroleright',(request, response)=>{
    const RoleRight = require('../models/roleright');
    let roleId = request.body.roleid;
    let rightId = request.body.rightid;
    const roleRightObject = new RoleRight(roleId, rightId);
    const roleRightCrud = require('../db/helpers/rolerightcrud');
    const promise = roleRightCrud.add(roleRightObject);
    promise.then(data=>{
        response.json({message:' Role Right Mapping SuccessFully'});
    }).catch(err=>{
        response.json({message:'Error During Role Right Mapping'});
        console.log('Err ',err);
    })
});
route.get('/searchrole',(request, response)=>{

});
module.exports = route;
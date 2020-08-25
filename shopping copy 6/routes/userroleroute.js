const express = require('express');
const route = express.Router();
route.post('/adduserrole',(request, response)=>{
    const UserRole = require('../models/userrole');
    let userid = request.body.userid;
    let roleid = request.body.roleid;
    const userRoleObject = new UserRole(userid, roleid);
    const userRoleCrud = require('../db/helpers/userrolecurd');
    const promise = userRoleCrud.add(userRoleObject);
    promise.then(data=>{
        response.json({message:'User Role Mapping SuccessFully'});
    }).catch(err=>{
        response.json({message:'Error During Role User Role Mapping'});
        console.log('Err ',err);
    })
});
route.get('/searchrole',(request, response)=>{

});
module.exports = route;
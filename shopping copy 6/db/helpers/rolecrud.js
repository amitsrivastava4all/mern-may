const RoleModel = require('../schemas/role');


const roleOperations = {
    add(roleObject){

        var promise = RoleModel.create(roleObject);
        return promise;
    },
   search(){

   }
    ,
    update(){

    },
    remove(){

    }
}
module.exports = roleOperations;
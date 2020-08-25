const UserRoleModel = require('../schemas/userrole');


const userRoleOperations = {
    add(userRoleObject){

        var promise = UserRoleModel.create(userRoleObject);
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
module.exports = userRoleOperations;
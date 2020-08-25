const RoleRightModel = require('../schemas/roleright');


const roleRightOperations = {
    add(roleRightObject){

        var promise = RoleRightModel.create(roleRightObject);
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
module.exports = roleRightOperations;
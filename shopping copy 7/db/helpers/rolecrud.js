const RoleModel = require('../schemas/role');


const roleOperations = {
    add(roleObject){

        var promise = RoleModel.create(roleObject);
        return promise;
    },
   async search(roleId){
    const roleInfo = await RoleModel.findOne({_id:roleId});
    return roleInfo;
   }
    ,
    update(){

    },
    remove(){

    }
}
module.exports = roleOperations;
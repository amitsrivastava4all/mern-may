const RoleRightModel = require('../schemas/roleright');


const roleRightOperations = {
    add(roleRightObject){

        var promise = RoleRightModel.create(roleRightObject);
        return promise;
    },
   async search(roleId){
        const roleRightInfo = await RoleRightModel.
        find({'roleid':roleId});
    console.log('Role Right Info ',roleRightInfo);
    return roleRightInfo;
    }
    ,
    update(){

    },
    remove(){

    }
}
module.exports = roleRightOperations;
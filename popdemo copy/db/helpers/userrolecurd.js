const UserRoleModel = require('../schemas/userrole');


const userRoleOperations = {
    add(userRoleObject){

        var promise = UserRoleModel.create(userRoleObject);
        return promise;
    },
   async search(uid){
       const userRoleInfo = await UserRoleModel.findOne({"userid":uid});
       return userRoleInfo;
        /*UserRoleModel.findOne({"userid":uid},(err,doc)=>{

        })*/
   }
    ,
    update(){

    },
    remove(){

    }
}
module.exports = userRoleOperations;
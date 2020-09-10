

const UserModel = require('../schemas/user');
const RoleModel = require('../schemas/role');
const UserRoleModel = require('../schemas/userrole');
const userOperations = {
    register(userObject){
        const promise =UserModel.create(userObject);
        return promise;
    },
    login(userObject, res){
        console.log('UserObject is ',userObject);
        UserModel.findOne({'userid':userObject.userid})

        .populate('roleid')
        //.populate('roles')
        .exec(function(err, docs){
            if(err){
              // res.json(err);
                 res.status(500).json(err);
                //console.log('Error is ',err);
            }
            else{
                res.status(200).json(docs);
                //res.json(docs);
                //console.log('$$$$$$$$Doc is ',docs);
            }
        })
        //return promise;
    }
}
module.exports = userOperations;
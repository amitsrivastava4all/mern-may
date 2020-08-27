const userModel = require('../schemas/user');
const UserModel = require('../schemas/user');
const bcrypt = require('../../utils/encrypt');
const { DocumentProvider } = require('mongoose');
const UserInfo = require('../../models/userinfo');
const userOperations = {
    add(userObject){
        userObject.password = bcrypt
        .doEncrypt(userObject.password);
        var promise = UserModel.create(userObject);
        return promise;
    },
     search(userObject){
         let roleInfo;
         let roleRightInfo;
         let rightInfo;
        var promise = new Promise((resolve, reject)=>{

            UserModel.findOne({'userid':userObject.userid},async (err,doc)=>{
                if(err){
                    reject(err);
                }
                else{
                    if(doc && doc.userid){
                    let dbPassword = doc.password;
                    const encrypt =
                    require('../../utils/encrypt');
                    const result = encrypt.compare(userObject.password ,
                         dbPassword);
                         if(result){
                             let id = doc._id;
                             const userRoleMapping = require('./userrolecurd');
                             const userRoleInfo = await userRoleMapping.search(id);
                             if(userRoleInfo){
                                const role = require('./rolecrud');
                                roleInfo = await role.search(userRoleInfo.roleid);
                                console.log('ROLE INFO is ',roleInfo);
                                const roleRightMapping = require('./rolerightcrud');
                                roleRightInfo = await roleRightMapping.search(userRoleInfo.roleid);
                                console.log('Role Right Info ::: ',roleRightInfo);
                                const rights = require('./rightcrud');
                                 rightInfo = await rights.search(roleRightInfo[0].rightid);
                             }
                             console.log('_ID of User is ',doc._id);
                             const userInfo = require('../../models/userinfo');
                             const userInfoObject = new UserInfo(doc.userid,roleInfo.name
                                ,rightInfo);
                             console.log(':::::UserINFO OBJECT IS ',userInfoObject);
                             resolve(userInfoObject);
                         }
                         else{
                            resolve(null);
                         }

                }
                else{
                    resolve(null);
                }
            }
            })
        });
        return promise;

    },
    update(){

    },
    remove(){

    }
}
module.exports = userOperations;
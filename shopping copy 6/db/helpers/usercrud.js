const userModel = require('../schemas/user');
const UserModel = require('../schemas/user');
const bcrypt = require('../../utils/encrypt');
const { DocumentProvider } = require('mongoose');
const userOperations = {
    add(userObject){
        userObject.password = bcrypt
        .doEncrypt(userObject.password);
        var promise = UserModel.create(userObject);
        return promise;
    },
    search(userObject){
        var promise = new Promise((resolve, reject)=>{

            UserModel.findOne({'userid':userObject.userid},(err,doc)=>{
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
                             resolve(doc);
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
const mongoose = require('../connection');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userid:{type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:30,
        lowercase:true
    },
    password:{type:String, required:true},
    status:{type:String, default:'A'},
   roleid:{
       type:Schema.Types.ObjectId,
       ref:'userrolemappings',
       //required:true
   }
});
//var UserModel = mongoose.model('UserModel',userSchema, 'users');
var UserModel = mongoose.model('users',userSchema);
module.exports = UserModel;

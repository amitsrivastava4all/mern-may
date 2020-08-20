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
    status:{type:String, default:'A'}
   // ,details:{}
});
var UserModel = mongoose.model('customers',userSchema);
module.exports = UserModel;

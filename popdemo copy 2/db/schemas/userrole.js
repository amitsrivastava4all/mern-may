const mongoose = require('../connection');
var Schema = mongoose.Schema;
var userroleSchema = new Schema({
    // FK
  userid:{
      type:Schema.Types.ObjectId,
      ref:'UserModel',
      required:true
  },
  //FK
  roleid:{
      type:Schema.Types.ObjectId,
      ref:'RoleModel',
      required:true
  },
  status:{type:String, default:'A'}

});
var UserRoleModel = mongoose.model('userrolemappings',userroleSchema);
module.exports = UserRoleModel;

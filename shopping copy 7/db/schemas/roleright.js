const mongoose = require('../connection');
var Schema = mongoose.Schema;
var rolerightSchema = new Schema({
    // FK
  rightid:{
      type:Schema.Types.ObjectId,
      ref:'RightModel',
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
var RoleRightModel = mongoose.model('rolerightmappings',rolerightSchema);
module.exports = RoleRightModel;

const mongoose = require('../connection');
var Schema = mongoose.Schema;
var rightSchema = new Schema({
    name:{type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:30,
        lowercase:true
    },
    screenurl:{type:String, required:true},
    descr:{type:String, required:true},
    status:{type:String, default:'A'}
   // ,details:{}
});
var RightModel = mongoose.model('rights',rightSchema);
module.exports = RightModel;

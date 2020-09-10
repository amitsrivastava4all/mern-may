const RightModel = require('../schemas/rights');


const rightOperations = {
    add(rightObject){

        var promise = RightModel.create(rightObject);
        return promise;
    },
   async search(rightId){
        return await RightModel.find({_id:rightId});
   }
    ,
    update(){

    },
    remove(){

    }
}
module.exports = rightOperations;
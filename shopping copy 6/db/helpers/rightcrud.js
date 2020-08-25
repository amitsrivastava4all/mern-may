const RightModel = require('../schemas/rights');


const rightOperations = {
    add(rightObject){

        var promise = RightModel.create(rightObject);
        return promise;
    },
   search(){

   }
    ,
    update(){

    },
    remove(){

    }
}
module.exports = rightOperations;
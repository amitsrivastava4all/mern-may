const userOperations = {
    login(userid, pwd){
        if(userid==pwd){
            return "Welcome "+userid;
        }
        else{
            return "Invalid Userid or Password";
        }
    },
    register(){

    },
    profile(){

    }
}
module.exports = userOperations;
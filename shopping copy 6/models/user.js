 class User{
     constructor(userid, password){
         this.userid = userid;
         this.password = password;
     }
     toString(){
         return "Userid is "+this.userid+" Password "
         +this.password;
     }
 }
 module.exports = User;
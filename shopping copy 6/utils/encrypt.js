const bcrypt = require('bcryptjs');
const encrypt = {
    salt:10,
    doEncrypt(plainPassword){
       const encPassword =  bcrypt.hashSync(plainPassword,this.salt);
        return encPassword;
    },
    compare(plainPassword, dbPassword){
        const result = bcrypt.compareSync(plainPassword,dbPassword);
        return result;
    }
}
module.exports = encrypt;
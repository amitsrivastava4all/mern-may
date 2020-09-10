const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());
console.log(uuidv4());
console.log(uuidv4());
console.log(uuidv4());
console.log(uuidv4());
var otpGenerator = require('otp-generator')

let t= otpGenerator.generate(4, { upperCase: false, specialChars: false });
console.log(t);
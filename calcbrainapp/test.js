const calc = require('./index');
console.log('Process ',process.argv);
let env = process.argv[2];
console.log('Env is ',env);
console.log('Add is ',calc.add(10,20));
console.log('Sub is ',calc.sub(10,20));
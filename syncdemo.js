const fs = require('fs');
var startTime = Date.now();
var path = '/Users/amit/Desktop/Screen Recording 2020-06-06 at 12.32.46 AM.mov';
//var content = fs.readFileSync(path);
console.log('First Call Start');
fs.readFile(path,(err, content)=>{
    console.log('First Call Content ',content);
})
//console.log('Content ',content);
console.log('Second Call Start');
path = '/Users/amit/Desktop/Screen Recording 2020-06-06 at 1.00.15 AM.mov';
//var content2 = fs.readFileSync(path);
fs.readFile(path,(err, content)=>{
    console.log('Second Call Content ',content);
})
console.log('Second Call Ends ');
var a=100;
var b = 200;
console.log('A is ',a, ' And B is ',b);
for(let i = 1;i<=10; i++){
    console.log('I is ',i);
}
var endTime = Date.now();
console.log('Total Time ',endTime-startTime);
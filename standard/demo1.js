const fs  = require('fs');
const path = require('path');
const parent = path.normalize(__dirname+"/..");
console.log('Parent Path is ',parent);
const filePath = path.join(parent,"/shares.txt");
console.log('DIR PATH is ',path.dirname(filePath));
console.log('File Name is ',path.basename(filePath));
console.log('File Name Without ext is ',path.basename(filePath,'.txt'));
console.log('OS Sep ',path.sep);
console.log('OS DEL ',path.delimiter); // c:\\
var obj = path.parse(filePath);
console.log('Obj ',obj);
var p = path.format(obj);
console.log('Now Path is ',p);
fs.readFile(filePath,(err,content)=>{
    if(err){
        console.log('Error ',err);
    }
    else{
        console.log('Content is '+content);
    }
})
//const fs = require('fs');
const {readFile, readFileSync} = require('fs');
//fs.readFile(__filename,(error, content)=>{
    // c:\\abcd\\xyz\\w.txt
    console.log(__filename);
    console.log('Before Sync ');
    const path = process.argv[2];
    var content = readFileSync(path);
    console.log(content?content:'Error ');
    console.log('After Sync ');
   console.log('Async Call');
    readFile(__filename,{encoding:'utf8'},(error, content)=>{
    if(error){
        console.log('Error in File Read ',error);
    }
    else{
        console.log('Content is '+content);
    }
});
console.log('Async Call Ends');


var a= 100;
var b = 200;
var c = a+ b;
console.log("C is ",c);


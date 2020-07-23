const fs = require('fs');
const path = '/Users/amit/Documents/LOS-Java/Part1.mov';
console.log('Start Code');
const readStream = fs.createReadStream(path);
readStream.on('open',()=>{
    console.log('Stream is Open');
})
readStream.on('data',(chunk)=>{
    console.log('Chunk is ',chunk);
},{highWaterMark:10000});
readStream.on('end',()=>{
    console.log('Stream End');
});
readStream.on('close',()=>{
    console.log('Stream is Close');
})

/*fs.readFile(path,(err,content)=>{
    if(err){
        console.log('Error is ',err);
    }
    else{
        console.log(content);
    }
});*/
console.log("Code Ends");
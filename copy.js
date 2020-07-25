const fs = require('fs');
const path = '/Users/amit/Desktop/Screen Recording 2020-06-06 at 12.32.46 AM.mov';
// console.log('Start Code');
// fs.readFile(path,(err, content)=>{
//     fs.writeFile('/Users/amit/Desktop/copyfile.mov',content);
// })
const readStream = fs.createReadStream(path);
const writeStream = fs.createWriteStream('/Users/amit/Desktop/copyfile.mov');
readStream.pipe(writeStream);
readStream.pipe(process.stdout);
/*readStream.on('data',chunk=>{
    writeStream.write(chunk);
});
readStream.on('end',()=>{
    console.log('Copy Done....');
})*/

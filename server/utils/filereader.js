
const homePage = (url, response)=>{
    const fs = require('fs');
    const path = require('path');

    console.log('Current Dir is ',__dirname);
    const parentDir = path.normalize(__dirname+'/..');
    console.log('Parent Dir ',parentDir);
    const fullPath = path.join(parentDir,'/public'+url);
    console.log('Full Path is ',fullPath);
    const readStream = fs.createReadStream(fullPath);
    // readStream.on('data',(chunk)=>{
    //     response.write(chunk);
    // });
    // readStream.on('end',()=>{
    //     response.end();
    // });
    readStream.pipe(response);
}
module.exports = homePage;
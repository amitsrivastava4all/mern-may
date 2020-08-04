function isStaticFiles(fileName){
    const fs = require('fs');
    const path = require('path');
    const extensions = ['.jpg','.jpeg','.png','.html','.css','.js','.ico'];
    let ext = path.extname(fileName);
    return extensions.indexOf(ext)>=0;

}
module.exports = isStaticFiles;
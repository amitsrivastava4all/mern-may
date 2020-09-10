const multer = require('multer');
const path = require('path');
const storageFn = multer.diskStorage({
    destination:function(req,file, cb){
        const parent = path.normalize(__dirname+"/..");
        cb(null, parent+'/uploads/');
    },
    filename:function(req,file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({
    storage:storageFn,limits:1024* 1024*2, // 2MB,
    fileFilter:function(req,file, cb){
        console.log('File Name is ',file);
        if(path.extname(file.originalname)!=='.xls'){
            return cb(new Error('Only XLS are Allowed'),false);
        }
        else{
            return cb(null, true);
        }
    }

});
const uploading = upload.single('f1');
module.exports = uploading;
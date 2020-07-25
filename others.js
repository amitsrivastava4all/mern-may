const fs = require('fs');
/*
const path = '/Users/amit/Desktop/Screen Recording 2020-06-06 at 12.32.46 AM.mov';
fs.readFile(path,(err,content)=>{
    // fs.writeFile('/Users/amit/Desktop/copyfile.mov',content,(err)=>{

    // })
    fs.appendFile('/Users/amit/Desktop/copyfile.mov',content,(err)=>{
        if(err){
            console.log('Error ',err);
        }
        else{
            console.log('Append It');
        }
    });

}); */

console.log('I am Watching')
fs.watch('/Users/amit/Documents/may-2020-fullstack/js/nodecodes/shares.txt',(event, fileName)=>{
    console.log('File Change ',event, ' file name ',fileName);
    fs.readFile('/Users/amit/Documents/may-2020-fullstack/js/nodecodes/shares.txt',(err,content)=>{
        console.log('Share Rates are '+content);
    })
})
/*
fs.copyFile('SourcePath.txt','TargetPath.txt',(err)=>{

})
fs.exists('UrFilePath.txt',(exist)=>{
    if(exist){
        // Exist
    }
    else{
        // not Exist
    }
})
fs.unlink('FileToBeDeletePath.txt',(err)=>{
    if(err){

    }
    else{

    }
})
fs.mkdir('dirPath',(err)=>{

});
fs.readdir('dirPath',(err)=>{

});
fs.rmdir('dirpath',(err)=>{

});

*/
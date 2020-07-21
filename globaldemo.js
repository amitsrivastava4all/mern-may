var a= 100;
var b = 200;
var c = a + b;
process.on('uncaughtException',(err)=>{
    console.log('Something went wrong ',err);
});
console.log("Sum is "+c);
console.log(__filename);
console.log(__dirname);
console.log('Process ',process.cwd());
//show();
console.log('Process ',process.arch);
console.log('Process ',process);
console.log('Process Args ',process.argv);
var sum = 0;
for(let i = 2; i<process.argv.length; i++){
    sum+=parseInt(process.argv[i]);
}
console.log('Sum is ',sum);
let portNo = process.env.PORT || 1234;
console.log('Port is ',portNo);
process.stdout.write('Hello NOde JS');
var myData = '';
console.log('Enter the Name');
//var userName = readlineSync.question('Enter your name? ');
process.stdin.on('data',(chunk)=>{
    myData +=chunk;
    console.log('After Input ',myData);
});
setTimeout(()=>{
    console.log("Going to Kill");
    process.kill();
},5000);


// process.on('exit',(exitCode)=>{
//     console.log('Exit Code is ',exitCode);
// });

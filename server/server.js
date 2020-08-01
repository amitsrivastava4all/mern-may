const http = require('http');
/*function handleRequestResponse(request, response){
//console.log('Handle Req and Res');
response.write('Hello User I am Server');
response.end();
}*/
//const server = http.createServer(handleRequestResponse);
const server = http.createServer((req, res)=>{
    const fileReader= require('./utils/filereader');
    console.log('Server Accept the request ',req.url);
    res.setHeader("Content-Type","text/html");
    if(req.url=='/favicon.ico'){
        res.write('Fav');
        res.end();
    }
    else
    if(req.url=='/'){
        fileReader('/index.html',res);
    }
    else{
        fileReader(req.url,res);
    }



    //res.write('<h1>Hello User I am Server</h1>');
    //res.end();
})
 server.listen(process.env.PORT || 1234,()=>{
    console.log('Server Started....... ',server.address().port);
})

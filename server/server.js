const http = require('http');
/*function handleRequestResponse(request, response){
//console.log('Handle Req and Res');
response.write('Hello User I am Server');
response.end();
}*/
//const server = http.createServer(handleRequestResponse);
const isStaticFile = require('./utils/static');
const server = http.createServer((req, res)=>{
    const fileReader= require('./utils/filereader');
    console.log('Server Accept the request ',req.url);
    res.setHeader("Content-Type","text/html");
    let url = req.url;
    let method= req.method;
    if(url=='/'){
        url ='/index.html';
    }
    if(isStaticFile(url)){
        fileReader(url,res);
    }
    else
    if(method=='GET' && url.startsWith('/login')){
        const userOperations = require('./helpers/user');
        const urlObj = require('url');
        const obj = urlObj.parse(url,true);
        console.log('obj ',obj);
        let userid = obj.query.userid;
        let pwd = obj.query.pwd;
        let msg = userOperations.login(userid, pwd);
        res.write(msg);
        res.end();
    }
    else
    if(method=='POST' && url.startsWith('/login')){
        const userOperations = require('./helpers/user');

        var data = '';
        req.on('data',chunk=>{
            data+=chunk;
        });
        req.on('end',()=>{
            console.log('Data is in POST ',data);
            const qs = require('querystring');
            let obj = qs.parse(data);
            console.log('QS PArse Object ',obj);
            let userid = obj.userid;
        let pwd = obj.pwd;
        let msg = userOperations.login(userid, pwd);
        res.write(msg);
        res.end();
        });

    }
    /*if(req.url=='/favicon.ico'){
        res.write('Fav');
        res.end();
    }
    else
    if(req.url=='/'){
        fileReader('/index.html',res);
    }*/
    else{
        fileReader(req.url,res);
    }



    //res.write('<h1>Hello User I am Server</h1>');
    //res.end();
})
 server.listen(process.env.PORT || 1234,()=>{
    console.log('Server Started....... ',server.address().port);
})

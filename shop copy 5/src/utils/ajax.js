import axios from 'axios';
//import axios from './interceptors';
export function getData(){
    console.log('$$$$$$$$$$$Axios Object is ',axios.defaults.baseURL);
    // GET - QueryString
    // URL?name=Amit&company=BrainMentors
    // Get - Path Param
    // URL/Amit/BrainMentors
    //let token = localStorage.tokenId;
const URL = '/myserverdata/master/mobiles.json';

const options = {
    //cors:true,
method:'get',  //post, put, delete
url:URL,
timeout:5000,
maxContentLength:10000 //,
//data:obj
/* POST
data:{
    price:1000,
    qt:2
}*/
}
// 1st
//var promise = axios(options);
// 2nd

//var promise = axios.all(URL,{timeout:5000});

// const axiosObject = axios.create({
//     baseURL:'https://raw.githubusercontent.com/brainmentorspvtltd',
//     headers:{'Content-Type':'application/xml'},
//     method:'post'
// });
// axiosObject.interceptors.request.use(request=>{
//     return request;
// });
// var p1= axiosObject.get(URL);


// Remove Interceptor
//axios.interceptors.request.eject(requestInterceptor);
var promise = axios.get(URL,{timeout:5000});
return promise;
// promise.then(response=>{
// console.log('Response of Axios is ',response);
// }).catch(err=>{
// console.log('Error is ',err);
// }).finally(()=>{
// console.log('this code always run');
// });
}
import axios from 'axios';
export function getData(){
    // GET - QueryString
    // URL?name=Amit&company=BrainMentors
    // Get - Path Param
    // URL/Amit/BrainMentors
const URL = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
const options = {
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
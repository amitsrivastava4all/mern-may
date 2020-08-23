import axios from 'axios';
export function loadSettings(){
console.log('LOAD SETTING IS #######################');
axios.defaults.baseURL = 'https://raw.githubusercontent.com/brainmentorspvtltd';
axios.defaults.headers.post['Content-Type']='application/json';
var token = localStorage.tokenId;
axios.interceptors.request.use(request=>{
    request.tokenId = token;
    console.log('Request Interceptor is Running ',request.tokenId);
    return request;
});
axios.interceptors.response.use(response=>{
    response.headers['secure']= 'Brain Mentors Headers';
    console.log('Response Interceptor is Running');
    return response;
});
console.log('After All Things ',axios.defaults.baseURL);
}

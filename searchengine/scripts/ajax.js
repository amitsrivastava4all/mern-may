window.addEventListener('load',bindEvents);
window.addEventListener('offline',()=>{
    console.log('OffLine Event');
    var t = localStorage.a ;
})

window.addEventListener('online',()=>{
    console.log('Online Event');
    doAjax();
    localStorage.a = 10000;
})

function bindEvents(){
    //document.querySelector('#loading').className = 'hide';
    document.querySelector('#bt').addEventListener('click',doAjax2);
}
function printImages(obj){
    var div = document.querySelector('#result');
    div.innerHTML = '';
    var arr = obj.data;
    arr.forEach(ele=>div.
        appendChild(createImage(ele.images.original.url)));
    //console.log(obj.data)


}
function createImage(url){
    var image = document.createElement('img');
    image.src = url;
    image.className = 'size';
    return image;
}

function doAjax2(){
    var obj = {id:1001, name:'Ram',salary:9999};
    var txt = document.querySelector('#txt').value;
    var url = `http://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=${txt}&limit=5`;
    if(window.fetch){
        const options = {
            method:'POST',
            mode:'cors',
            cache:'no-cache',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj) // Convert Object into JSON

        }
        //var promise = fetch(url,options);
        var promise = fetch(url);
        promise.then(response=>{
            // response.text()
            // response.blob()
            response.json().then(data=>{
                printImages(data);
                //console.log('Data is ',data);
            }).catch(err=>console.log('Invalid JSON ',err));
        }).catch(err=>console.log('Server Call Error ',err))
        .finally(()=>{
            console.log('I Will Run Always ');
        })
    }
    else{
        console.log('Fetch is Not Supported in Ur Browser');
    }

}

function doAjax(){
    document.querySelector('#loading').classList.toggle('hide');
    var txt = document.querySelector('#txt').value;
    var url = `http://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=${txt}&limit=5`;
    console.log('URL is ',url);
    var http = new XMLHttpRequest();
    // Bind ReadyState Event
    http.onreadystatechange= function(){
        console.log('States are ',http.readyState, ' Status ',http.status);
        if(http.readyState==4 && http.status==200){
            document.querySelector('#loading').classList.toggle('hide');
        //console.log('Type ',http.responseType);
        //console.log('Type of ',typeof http.responseText);
        //console.log('Correct Response ',http.responseText);
        try{
        var obj = JSON.parse(http.responseText);
        }
        catch(e){
            console.log('INvalid JSON ',e);
        }
        console.log('Object is ',obj);
        printImages(obj);
        }
        }
        //http.open('POST',url);
        http.open('GET',url);
        //http.send("fname=ram&lname=sharma");
        http.send();



}
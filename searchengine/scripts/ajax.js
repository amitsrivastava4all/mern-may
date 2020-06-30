window.addEventListener('load',bindEvents);
function bindEvents(){
    //document.querySelector('#loading').className = 'hide';
    document.querySelector('#bt').addEventListener('click',doAjax);
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
        var obj = JSON.parse(http.responseText);
        console.log('Object is ',obj);
        printImages(obj);
        }
        }
        http.open('GET',url);
        http.send();



}
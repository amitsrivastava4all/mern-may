window.addEventListener('load',init);
function init(){
    bindEvents();
    updateCounts();
}
function bindEvents(){
    document.querySelector('#add')
    .addEventListener('click',addNewTask);
}
function updateCounts(){
    document.querySelector('#total').innerText
     = taskOperations.getCount();
     document.querySelector('#mark').innerText
     = taskOperations.getMark();
     document.querySelector('#unmark').innerText
     = taskOperations.getUnMark();

}
function addNewTask(){
    var id = document.querySelector('#taskid').value;
    var name = document.querySelector('#taskname').value;
    var descr = document.querySelector('#descr').value;
    var task = taskOperations.addTask(id, name , descr);
    updateCounts();
    printTask(task);
    // var taskList = taskOperations.getTasks(); // get array
   // var lastRecord = taskList[taskList.length-1];
}
function createIcon(url){
    let image = document.createElement('img');
    image.src= url;
    image.className = 'size';
    return image;
}
function printTask(task){
    var tbody = document.querySelector('#tasks');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in task){
        tr.insertCell(index).innerText = task[key];
        index++;
    }
    let td = tr.insertCell(index);
    td.appendChild(createIcon(config.paths.images.edit));
    td.appendChild(createIcon(config.paths.images.trash));

}
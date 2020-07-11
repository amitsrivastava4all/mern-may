window.addEventListener('load',init);
var iterator;
function init(){

    iterator = autoIncr();
    printTaskId();
    bindEvents();
    updateCounts();
}
const printTaskId=()=>
    document.querySelector('#taskid').innerText
    = iterator.next().value;

function bindEvents(){
    document.querySelector('#add')
    .addEventListener('click',addNewTask);
    document.querySelector('#delete')
    .addEventListener('click',deleteTask);

}
function deleteTask(){
    taskOperations.deleteTask();
    document.querySelector('#tasks').innerHTML = '';
    let tasks = taskOperations.getTasks();
    tasks.forEach(taskObject=>printTask(taskObject));
    updateCounts();
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
    var id = document.querySelector('#taskid').innerText;
    var name = document.querySelector('#taskname').value;
    var descr = document.querySelector('#descr').value;
    var task = taskOperations.addTask(id, name , descr);
    updateCounts();
    printTaskId();
    printTask(task);
    // var taskList = taskOperations.getTasks(); // get array
   // var lastRecord = taskList[taskList.length-1];
}

function toggleMark(){
    var id = this.getAttribute('tid');
    let iTag = this;
    let tr = iTag.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
    console.log('Toggle Mark Call ',id);
    taskOperations.toggleMarking(id);
    updateCounts();
}

function edit(){
    var id = this.getAttribute('tid');
    console.log('Edit Call', id);
}

function createIcon(className, fn, currentId){
    //let image = document.createElement('img');
    //image.src= url;
    //image.className = 'size';
    let image = document.createElement('i');
    image.classList.add('hand');
    image.classList.add(config.icons.base);

    image.classList.add(className);
    image.classList.add(config.icons.margin);
    image.addEventListener('click',fn);
    image.setAttribute('tid',currentId);
    return image;
}
function printTask(task){
    var tbody = document.querySelector('#tasks');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in task){
        if(key=='isMark'){
            continue;
        }
        tr.insertCell(index).innerText = task[key];
        index++;
    }
    let currentId = task.id;
    let td = tr.insertCell(index);
    td.appendChild(createIcon(config.icons.edit,edit, currentId));
    td.appendChild(createIcon(config.icons.trash,toggleMark, currentId));

    //td.appendChild(createIcon(config.paths.images.edit));
    //td.appendChild(createIcon(config.paths.images.trash));

}
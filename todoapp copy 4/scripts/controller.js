window.addEventListener('load',init);
// window.addEventListener('focus',()=>{
//     alert('Focus');
// })
var iterator;
function init(){

    iterator = autoIncr();
    printTaskId();
    bindEvents();
    updateCounts();
    document.querySelector('#searchdiv').classList.add('hide');
}
const printTaskId=()=>
    document.querySelector('#taskid').innerText
    = iterator.next().value;

function bindEvents(){
    document.querySelector('#add')
    .addEventListener('click',addNewTask);
    document.querySelector('#delete')
    .addEventListener('click',deleteTask);
    document.querySelector('#search')
    .addEventListener('click',searchToggle);
    document.querySelector('#searchbox').addEventListener('keyup'
    ,searchTask);
    document.querySelector('#savelocal')
    .addEventListener('click',saveLocal);
    document.querySelector('#loadlocal')
    .addEventListener('click',loadLocal);
    document.querySelector('#sort')
    .addEventListener('click',sort);
    document.querySelector('#save')
    .addEventListener('click',save);
    document.querySelector('#load')
    .addEventListener('click',loadFromDB);


}
function loadFromDB(){
    let promise = dbOperations.loadAllRecords();


    promise.then(querySnapShot=>{
            querySnapShot.forEach(doc=>{
               // console.log('Doc is ',doc.data());
               let obj = doc.data();
               taskOperations.addTask(obj.id, obj.name , "NA");
                printTable(taskOperations.tasks);
                updateCounts();
            })
        }).catch(err=>{
            console.log('Error is ',err);
        })
}
function save(){
    dbOperations.add(taskOperations.tasks);
}
function sort(){
    taskOperations.tasks.sort((first,
        second)=>first.name.localeCompare(second.name));
        printTable(taskOperations.tasks);
        updateCounts();
}

function loadLocal(){
    if(window.localStorage){
        if(window.localStorage.tasks){
            var obj = JSON.parse(localStorage.tasks);
                let tasks = obj.tasks;
                printTable(tasks);
                taskOperations.tasks = tasks;
                updateCounts();
        }
        else{
            alert("No Data to Show");
        }
    }
    else{
        alert("Ur Browser is Outdated...");
    }
}

function saveLocal(){
    if(window.localStorage){
        var obj = {"tasks":taskOperations.tasks};
            localStorage.tasks = JSON.stringify(obj);
            alert("Data Stored...");
    }
    else{
        alert("Ur Browser is Outdated...");
    }
}

function searchTask(){
   let currentValue =  this.value;
   console.log('Current Value is ',currentValue);
   var searchResult = taskOperations.searchByName(currentValue);
   if(searchResult.length>0){
    printTable(searchResult);
   }
   else{
       alert("No Record Found....");
   }
}

const searchToggle=()=>
    document.querySelector('#searchdiv').classList.toggle('hide');

function deleteTask(){
    taskOperations.deleteTask();

    let tasks = taskOperations.getTasks();
    printTable(tasks);
    updateCounts();
}
function printTable(tasks){
    document.querySelector('#tasks').innerHTML = '';
    tasks.forEach(taskObject=>printTask(taskObject));
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
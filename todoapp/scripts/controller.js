window.addEventListener('load',bindEvents);
function bindEvents(){
    document.querySelector('#add')
    .addEventListener('click',addNewTask);
}
function addNewTask(){
    var id = document.querySelector('#taskid').value;
    var name = document.querySelector('#taskname').value;
    var descr = document.querySelector('#descr').value;
    var task = taskOperations.addTask(id, name , descr);
    printTask(task);
    // var taskList = taskOperations.getTasks(); // get array
   // var lastRecord = taskList[taskList.length-1];
}
function printTask(task){
    var tbody = document.querySelector('#tasks');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in task){
        tr.insertCell(index).innerText = task[key];
        index++;
    }

}
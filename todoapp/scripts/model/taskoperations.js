const taskOperations  = {
    tasks:[],
    addTask(id , name, descr){
        var task = new Task(id , name, descr);
        this.tasks.push(task);
        return task;
    },
    getTasks(){
        return this.tasks;
    },
    updateTask(){

    },
    searchTask(){

    }
}
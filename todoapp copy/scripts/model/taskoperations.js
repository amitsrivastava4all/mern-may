const taskOperations  = {
    tasks:[],
    addTask(id , name, descr){
        var task = new Task(id , name, descr);
        this.tasks.push(task);
        return task;
    },
    getMark(){
        return 0 ;
    },
    getUnMark(){
        return 0;
    },

    getCount:()=>taskOperations.tasks.length,
    //  getCount(){
    //      return this.tasks.length;
    //  },
    getTasks(){
        return this.tasks;
    },
    updateTask(){

    },
    searchTask(){

    }
}
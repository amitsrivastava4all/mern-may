const taskOperations  = {
    tasks:[],
    addTask(id , name, descr){
        var task = new Task(id , name, descr);
        this.tasks.push(task);
        return task;
    },
    deleteTask(){
          this.tasks = this.tasks.filter(taskObject=>
            !taskObject.isMark)  ;
    },

    toggleMarking(id){
        let taskObject = this.tasks.find(taskObject=>taskObject.id==id);
        taskObject.isMark = !taskObject.isMark;
    },
    getMark(){
        return this.tasks.
        filter(taskObject=>taskObject.isMark==true).length ;
    },
    getUnMark(){
        return this.tasks.length - this.getMark();
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
const dbOperations = {

    loadAllRecords(){
        var promise= fs.collection('tasks').get();
        return promise;
        //var promise= fs.collection('tasks').get();
        // promise.then(querySnapShot=>{
        //     querySnapShot.forEach(doc=>{
        //         console.log('Doc is ',doc.data());
        //     })
        // }).catch(err=>{
        //     console.log('Error is ',err);
        // })


    },
    loadByCriteria(name){
        var promise = fs.collection('tasks').where("name","==",name).get();
        promise.then(querySnapShot=>{
            querySnapShot.forEach(doc=>{
                console.log('Doc is ',doc.data());
            })
        }).catch(err=>{
            console.log('Error is ',err);
        })
    },

    add(tasks) {
        tasks.forEach((taskObject)=>{
            var object = {id:taskObject.id, name: taskObject.name};
           var pr =  fs.collection('tasks').doc(taskObject.id).set(object); // add, update
           //var pr =  fs.collection('tasks').doc(taskObject.id).delete(object);
            pr.then(data=>{
                alert("Record Added...");
            }).catch(err=>console.log('Error is ',err));


        });

    }

}
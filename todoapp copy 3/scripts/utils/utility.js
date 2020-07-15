function* autoIncr(){
    var counter = config.autoIncrementStart;
    while(true){
    yield counter;
    counter++;
    }
    }
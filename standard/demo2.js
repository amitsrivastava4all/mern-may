const events = require('events');
const eventEmitter = new events.EventEmitter();
// on , once
eventEmitter.on('openconnection',(data)=>{
    console.log('Connection is Open ',data);
});
function fn(data){
    console.log('I am the 2nd ',data);
}
eventEmitter.on('openconnection',fn);
eventEmitter.emit('openconnection','ORACLE');
eventEmitter.emit('openconnection','MYSQL');
//eventEmitter.removeListener('openconnection');
eventEmitter.removeAllListeners('openconnection');
console.log('All Removed...')
//eventEmitter.off('openconnection',fn);
eventEmitter.emit('openconnection','ORACLE');
console.log(events.EventEmitter.defaultMaxListeners);
eventEmitter.setMaxListeners(20);
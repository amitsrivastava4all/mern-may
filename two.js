function show(){
    var a= 100;
    var b = 200;
    var c = a + b;
    return c;
}
const obj = {
    add(){
        console.log('i am add');
    },
    sub(){
        console.log('I am Sub');
    }
}
module.exports = obj;
module.exports.fn = show;
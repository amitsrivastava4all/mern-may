window.addEventListener('load',bindEvents);

// function registerEvent(currentButton){
//     currentButton.addEventListener('click',printXor0);
// }
var buttons = document.querySelectorAll('button');
function bindEvents(){
    

    // for(let i= 0 ; i<buttons.length; i++){
    //     buttons[i].addEventListener('click',printXor0);
    //     }
    //buttons.forEach(registerEvent);
    buttons.forEach(currentButton=>currentButton.addEventListener('click',printXor0));

}
// function isBlank(first){
//     return buttons[first].innerText.trim().length==0;
// }
const isBlank = first=>first.innerText.trim().length==0;
    
const allThreeBlank=(first, second, third)=>isBlank(buttons[first]) && isBlank(buttons[second]) 
    && isBlank(buttons[third]);

// function allThreeBlank(first, second, third){
//     return isBlank(buttons[first]) && isBlank(buttons[second]) 
//     && isBlank(buttons[third]);

    
// }
function compareThree(first, second, third){
    if(!allThreeBlank(first,second, third)){
    if(buttons[first].innerText == buttons[second].innerText && 
        buttons[first].innerText == buttons[third].innerText){
            return true;
        }
    }
        return false;
}
const gameOver = ()=>compareThree(0,1,2) || compareThree(3,4,5) || compareThree(6,7,8);

var flag = false;
var count = 0;
function printXor0(){
    //console.log('Print X or Zero',this);
    if(this.innerText.length==0){
        count++;
    this.innerText = flag?'X':'0';
    
    if(count>4){
    
        if(gameOver()){
           
            document.querySelector('#result').innerText = 'Game Over'
            +( flag?"X":"0")+" Win";
        }
    }
    flag = !flag;
    }

}
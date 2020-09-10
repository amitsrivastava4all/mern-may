import { userActions } from "../actions/useractions";

const initState = {
    userInfo:{
    userid:'',
    password:'',
    name:'',
    city:''
    },
    orderInfo:{

    },
    cartInfo:{}
}
export const userOperations =(state=initState,action)=>{
    console.log('Action is :::: ',action);
    if(action.type==userActions.REG){
        return {...state, userInfo:action.payLoad};
    }
    else
    if(action.type==userActions.LOGIN){

    }
    return state;
}


export const LoggerMiddleware = (store)=>{
    return next=>{
        return action=>{
            console.log('Action is ',action);
            const result = next(action);
            console.log('Result is ',result);
            return result;
        }
    }
}
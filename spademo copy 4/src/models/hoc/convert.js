export const MYHOC = (wrappedComponent)=>{
    return function(props){
        const newProps = {
            ...props,x:100, y:200
        }
        return wrappedComponent(newProps);
    }
}
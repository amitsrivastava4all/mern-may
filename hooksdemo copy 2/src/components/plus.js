import React from 'react';
import {useState, useEffect, useRef} from 'react';
export const Plus = React.memo((props)=>{
    const name = useRef();
    const salary = useRef();
    console.log('Ref is ',name, ' ',salary );

    const [result,setState]= useState(0);
    const [msg,setMessage] = useState('');
    useEffect(()=>{
        console.log('I Like Component Did Mount + didUpdate...');
    },[msg])
    const doMessage=()=>{
        setMessage(`Name is ${name.current.value} and Salary
        is ${salary.current.value}`);
    }
    const doPlus = ()=>{
        setState(result+1);

    }
    return (
        <div>
            <h3>{msg}</h3>
            <input type='text' placeholder='Type Name Here'
             ref={name} />
            <input type='text' placeholder='Type Salary Here'
            ref={salary} />
            {props.name}
            <button onClick={doPlus}>Plus</button>
            <button onClick={doMessage}>Message Update</button>
    <p>Plus is {result}</p>
        </div>
    );
});

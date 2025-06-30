import { useMemo, useState } from 'react';

function myFun(num){
    return num*2
}
function UseMemo(){
    const [count,setCount]=useState(0);
    const returnValue=useMemo(()=>myFun(count),[count])
    return(
        <>
            <p>Ciunt value is: {count}</p>
            <p>new Count: {returnValue}</p>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </>
    )
}
export default UseMemo;

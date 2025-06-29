import { useCallback, useState } from "react";
import Button from "./Button";
function UseCallBack(){
    console.log('use call back')
    const [count,setCount]=useState(0);
    const [click,setClick]=useState(0);
    const increament=useCallback(()=>{
        setCount(count+1);
    },[count]);
    return(
        <>
            <p>Count: {count}</p>
            <Button handleClick={increament} text={"Increament"}/>
        </>
    )
}
export default UseCallBack;

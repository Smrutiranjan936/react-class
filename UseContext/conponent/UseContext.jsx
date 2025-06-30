import React,{ useContext, useEffect, useState} from "react";
const ThemedContext1=React.createContext('blue');
const ThemedContext2=React.createContext('red');
const ThemedContext3=React.createContext('green');
const ThemedContext4=React.createContext('yellow');
const ThemedContext5=React.createContext('blue');
const ThemedContext6=React.createContext('blue');
const ThemedContext7=React.createContext('blue');

function UseContext(){
    const [bg,setBG]=useState('white');
    const Theme1=useContext(ThemedContext1);
    const Theme2=useContext(ThemedContext2);
    const Theme3=useContext(ThemedContext3);
    const Theme4=useContext(ThemedContext4);
    const Theme5=useContext(ThemedContext5);
    const Theme6=useContext(ThemedContext6);
    const Theme7=useContext(ThemedContext7);
    const ThemedColor=[Theme1,Theme2,Theme3,Theme4,Theme5,Theme6,Theme7];
    const setBackground=()=>{
        const randomIndex=Math.floor(Math.random()*ThemedColor.length)
        const Background=ThemedColor[randomIndex];
        setBG(Background);
    }
    useEffect(()=>{
        document.body.style.background=bg;
    },[bg])
    return(
        <>
            <button onClick={setBackground}>Change Background</button>
        </>
    )
}
export default UseContext;

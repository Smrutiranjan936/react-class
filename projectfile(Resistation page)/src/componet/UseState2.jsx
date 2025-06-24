import { useState } from "react";

function UseState2(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
    }
    return(
        <>
            <form method="post" onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Enter your Name" onChange={(event)=> setName(event.target.value)} />
                <br />
                <input type="text" name="email" id="email" placeholder="Enter your Email" onChange={(event)=> setEmail(event.target.value)} />
                <br />
                <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(event)=> setPassword(event.target.value)} /> 
                <br />
                <input type="submit" name="btn" id="btn" value={"Register"} />   
            </form>
        
        </>
    )
}
export default UseState2;

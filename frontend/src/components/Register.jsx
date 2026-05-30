import { useState } from "react";
const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
        console.log(data);
    }
    return(
        <div>
            <h1 style={{ color: 'pink' }}>Register Page</h1>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <br/>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <br/>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default Register;
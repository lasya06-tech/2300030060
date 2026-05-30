import {useState} from "react";
const Login=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response=await fetch("http://localhost:5000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
         const data=response.json();
        console.log(data);
    }

    return(
        <div>
            <h1 style={{ color: 'pink' }}>Login Page</h1>
             <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <br/>
             <br/>
            <input type="password" style={{ color: 'blue' ,alignSelf: 'center'}} placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login
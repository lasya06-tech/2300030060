import {useState} from "react";
const AdminNotifications=()=>{

    const [id,setId]=useState("");
    const [type,setType]=useState("");
    const [message,setMessage]=useState("");
    const [timestamp,setTimestamp]=useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response=await fetch("http://localhost:5000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, type, message, timestamp })
        });
         const data=response.json();
        console.log(data);
    }

    return(
        <div>
            <h1 style={{ color: 'pink' }}>Admin Notifications</h1>
             <input type="text" placeholder="Enter your ID" value={id} onChange={(e)=>setId(e.target.value)}/>
             <br/>
             <br/>
            <input type="text" style={{ color: 'blue' ,alignSelf: 'center'}} placeholder="Enter your type" value={type} onChange={(e)=>setType(e.target.value)}/>
            <br/>
            <br/>
            <input type="text" style={{ color: 'blue' ,alignSelf: 'center'}} placeholder="Enter your message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <br/>
            <br/>
            <input type="text" style={{ color: 'blue' ,alignSelf: 'center'}} placeholder="Enter timestamp" value={timestamp} onChange={(e)=>setTimestamp(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AdminNotifications
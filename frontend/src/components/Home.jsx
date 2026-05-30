import {Link} from "react-router-dom";

const Home=()=>{
    return(
        <div>
            <h1 style={{color:"pink"}}>Welcome to the Home Page</h1>
            <div>
                <button style={{marginRight:"10px"}}>
                    <Link to="/register">Register</Link>
                    </button>
                    <br/>
                     <br/>
                <button style={{marginRight:"10px"}}>
                    <Link to="/login">Login</Link>
                </button>
                 <br/>
                  <br/>
                <button style={{marginRight:"10px"}}>
                    <Link to="/notifications">Notifications</Link>
                </button>
            </div>
        </div>
    )
}

export default Home;
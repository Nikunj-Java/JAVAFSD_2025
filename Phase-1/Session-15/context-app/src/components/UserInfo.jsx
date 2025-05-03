import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

function UserInfo(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {user,login,logout}=useAuthContext();

    const handleLogin=()=>{
        if(!username || !password){
            alert("Please enter both username and password.");
            return;
        }
        login({username});
        setUsername('');
        setPassword('');
    };
    return(
        <div style={{padding:'20px'}}>
            {user ?(
                <>
                <h3>Welcome ,{user.username}!</h3>
                <button onClick={logout}>Logout</button>
                
                
                </>
            ):(
                <>
                <h3>User Login using useContext</h3>
                <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>

                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <button onClick={handleLogin}>Login</button>
                
                </>
            )
        }
        </div>
    )

}

export default UserInfo;
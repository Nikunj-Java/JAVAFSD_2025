import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";



function UserInfo(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const user= useSelector((state)=>state.auth.user);
    const dispath= useDispatch();// it is used to  send actions to the store

    const handleLogin=()=>{
        if (!username || !password){
            alert('please enter username and password');
            return;
        }

        dispath(login({username}));
        setusername('');
        setpassword('');
    };

    const handleLogout=()=>{
        dispath(logout());
    }

    return(
        <div style={{textAlign:'center', marginTop:'50px', padding:'20px'}}>
            <h2>Redux User Login</h2>
            {user ? (
                <>
                <p>welcome ,{user.username}</p>
                <button onClick={handleLogout}>Logout</button>
                </>
            ):
            (
                <>
                <h2>SIGN In Here</h2>
                <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
                </>
            )}

        </div>
    )

}

export default UserInfo
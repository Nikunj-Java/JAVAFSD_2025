import { createContext, useContext, useState } from "react"

const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);

    const login=async (userData)=>{
        //you can try this from some API
        console.log("Loggin in:",userData);
        setUser(userData);
    };

    const logout=()=>{
        console.log("Loggin out");
        setUser(null);

    };

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext=()=>{
    return useContext(AuthContext);
}
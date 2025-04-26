import { useEffect } from "react";


function WelcomeMessage(){

    useEffect(()=>{
        console.log('Component did Mount');

        return()=>{
            console.log('component will unmount');
        }
    })
    return <h1>Welcome!</h1>
}


export default WelcomeMessage;
import { useEffect, useState } from "react";

function WindowsWidth(){

    const [width, setWidth]= useState(window.innerWidth);

    useEffect(()=>{
        const handleResize=()=>setWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        };
    },[]);

    return <p>Window Width:{width} px</p>
}

export default WindowsWidth;
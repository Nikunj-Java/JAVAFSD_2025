import { useState } from "react";

function Counter(){

    const [count,setCount]=useState(0);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count+1)}> Increase</button>
            <button onClick={()=> setCount(count-1)}> Decrease</button>
        </div>
    );

    //craete increase & decrease counter
}

export default Counter;
import { useEffect, useState } from "react";


function FetchData(){
    const [data,setData]=useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>response.json())
        .then(data=>setData(data));
    },[]);

    return(
        <div>
            {data ? <p>{data.title}</p>:<p>Loading.......</p>}
            {data ? <p>{data.body}</p>:<p>Loading.......</p>}
        </div>
    )
}

export default FetchData;
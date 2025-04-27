

import MyContextProvider, { useMyContext } from './MyContext';


function MyChild(){
    const {data,setData}=useMyContext();
    return(
        <MyContextProvider>
                <h1>My Child</h1>
                <p>{data}</p>

                <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/>
                
        </MyContextProvider>
    )
}

export default MyChild
import Child from "./Child";


function Parent({data,setData}){

    console.log(data);
    return(
        <div>
            <h2>Parent</h2>
            <p>pass the data to child :{data}</p>
            <Child data={data} setData={setData}/>
        </div>
    )

}

export default Parent;
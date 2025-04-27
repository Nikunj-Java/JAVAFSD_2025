

function Child({data,setData}){

    return(
        <div>
            <h3>Child</h3>
            <p>Data From Parent: {data}</p>
            <input type='text' value={data} onChange={setData}/>
        </div>
    )
}
export default Child;
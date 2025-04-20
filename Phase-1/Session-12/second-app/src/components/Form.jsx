import { useState } from "react";



function Form(){
    const [name,setName]= useState('');
    
    const handleChange=(event)=>{
        setName(event.target.value);
    };

    const handleSubmit=(event)=>{
        alert('A Name Was Submitted: '+name);
        event.preventDefault();
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:
                <input type="text" value={name} onChange={handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
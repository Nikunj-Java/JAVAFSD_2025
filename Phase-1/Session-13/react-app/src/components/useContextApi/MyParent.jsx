
import MyChild from './MyChild';
import MyContextProvider from './MyContext';

function MyParent(){
    return(
        <MyContextProvider>
                <h1>Parent</h1>
                <MyChild/>
                
        </MyContextProvider>
    )
}

export default MyParent
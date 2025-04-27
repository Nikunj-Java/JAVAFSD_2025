
import MyContextProvider from './MyContext';
import MyParent from './MyParent';

function MyGrandParent(){
    return(
        <MyContextProvider>
                <h1>Grand Parent</h1>
                <MyParent/>
                
        </MyContextProvider>
    )
}

export default MyGrandParent
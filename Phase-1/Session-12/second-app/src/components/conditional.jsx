

function Conditional(){
    const isLoggedIn=true;

    return (
        <div>
            <button>{isLoggedIn?'logout':'login'}</button>
        </div>
    )
}

export default Conditional;



function UserCards(props){

    return(
        <div>
            <lable>Name: </lable><h3>{props.user.name}</h3>
            <label>Email:</label><h4>{props.user.email}</h4>
            <lable>Country:</lable><p>{props.user.country}</p>
        </div>
    )
}

export default UserCards;
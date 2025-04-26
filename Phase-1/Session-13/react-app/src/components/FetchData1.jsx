import { useEffect, useState } from "react";
import axios from 'axios';

function FetchData1() {
  
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response=>{setUsers(response.data)})
        .catch(error=>{
            console.log('Error Loading users:',error);
        });
    },[]);



   

  return (
    <div className="container mt-4">
      {users.length>0 ? (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p>Loading.......</p>
        </div>
      )}
    </div>
  );
}

export default FetchData1;

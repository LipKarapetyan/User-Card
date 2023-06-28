import { useState,useEffect } from "react";
import UserCard from "./UserCard";

function UserList() {
    const [users,setUsers]=useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => setUsers(data))
          
      }, []);

      return (
        <div className="user-list">
          {users.map(user => (
            <div className='user-div'>
            <UserCard key={user.id} user={user} />
            </div>
          ))}
        </div>
      );
}

export default UserList

import React from "react";
function UserCard({user}) {
    return(
        <div className="card">
            <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="" />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )
}

export default UserCard
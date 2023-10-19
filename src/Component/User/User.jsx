import React from 'react';
import { Link } from "react-router-dom";

const User = ({user}) => {
    console.log(user)
    const {id, name, email} = user;

    return (
        <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Email: {email}</p>
    <div className="card-actions mt-6">
     <Link to={`/user/${id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default User;
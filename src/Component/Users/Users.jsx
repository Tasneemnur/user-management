import { useEffect, useState } from "react";
import User from "../User/User";


const Users = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    console.log("Hello")
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 w-5/6 mx-auto gap-8 my-20">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;
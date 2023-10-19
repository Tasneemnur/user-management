import React from 'react';
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const DeleteUser = () => {
    const data = useLoaderData();
    axios
       .delete(`https://jsonplaceholder.typicode.com/users/${data.id}`)
       .then((res) => {
         console.log(res);
       });
    return (
        <div>
            
        </div>
    );
};

export default DeleteUser;
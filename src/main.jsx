import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './Component/Users/Users.jsx';
import AddUser from './Component/AddUser/AddUser.jsx';
import UserDetails from './Component/UserDetails/UserDetails.jsx';
import UpdateUser from './Component/UpdateUser/UpdateUser.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
  },
  {
    path: "/users",
    element: <Users></Users>,
  },
  {
    path: "/user/:id",
    element: <UserDetails></UserDetails>,
    loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  },
    
  {
    path: "/addUser",
    element: <AddUser></AddUser>,
  },
  {
    path: "/updateUser",
    element: <UpdateUser></UpdateUser>,
  },
  {
    path: "/deleteUser",
    element: <App></App>,
  },
 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,

)
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="w-1/2 mx-auto my-28">
      {" "}
      <div className="text-3xl font-semibold">User Name: {data.username}</div>
      <div className=" text-neutral-500 my-3">{data.email}</div>
      <div className="text-xl ">Phone: {data.phone}</div>
      <Link to="/"><button className="btn btn-primary">Back</button></Link>
      <Link to={`/updateUser/${data.id}`}>
        <button className="btn btn-primary">Update</button>
      </Link>
      <Link to={`/user/${data.id}`}>
        <button className="btn btn-primary">Delete</button>
      </Link>
    </div>
  );
};

export default UserDetails;

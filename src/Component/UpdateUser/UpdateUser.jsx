
import axios from "axios";
const UpdateUser = () => {
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const phone = form.phone.value;
       const formData = {name, email, phone}
       axios
       .post("https://jsonplaceholder.typicode.com/users", formData)
       .then((res) => {
         console.log(res);
       });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          
          <div className="card flex-shrink-0 shadow-2xl bg-base-100 ">
            <form onSubmit={handleUpdate} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="text" placeholder="phone" name="phone" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateUser;
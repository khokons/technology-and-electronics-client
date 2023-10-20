import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";



const Register = () => {
  const { createUser } = useContext(AuthContext)
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 charecter or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should be at least one uppercase charecter ");
      return;
    } else if (!/[#?!@$%^&*-]/.test(password)) {
      setRegisterError("Password should be at least one special charecter");
    }

    // Creat a user

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Register Successfully");
       
      })

      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="bg-gray-400/100 pb-5">
      <h2 className="text-2xl text-center font-poppins py-10">
        Please Register
      </h2>
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#A3A7D2]">Register</button>
        </div>
      </form>
      <p className="text-center mt-4 text-black">
        Already have an account?{" "}
        <Link className="text-blue-700 font-bold" to="/login">
          Login
        </Link>
      </p>

      {registerError && (
        <p className="text-center mt-2 text-red-700">{registerError}</p>
      )}

      {success && <p className="text-center mt-2 text-blue-800">{success}</p>}
    </div>
  );
};

export default Register;
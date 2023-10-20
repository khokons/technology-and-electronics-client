import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)
  console.log(user)

  const handleLogOut = () => {
    logOut().then().catch();
  };

    const navLinks = <>

  <li className="uppercase"><NavLink to="/">Home</NavLink> </li>
  <li className="uppercase"><NavLink to="/addProducts">Add Product</NavLink> </li>
  <li className="uppercase"><NavLink to="/cart">My Cart</NavLink> </li>
  <li className="uppercase"><NavLink to="/login">Login</NavLink> </li>
  <li className="uppercase"><NavLink to="/register">Register</NavLink> </li>

    

    </>


    return (
        <div className="navbar bg-[#A3A7D2]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">
            <img className="w-1/5" src="https://i.postimg.cc/gJgqD7wg/tech-electronics-logo.webp" alt="" />
          </a> */}
          <a className="w-1/4">
            <img src="https://i.postimg.cc/gJgqD7wg/tech-electronics-logo.webp" alt="" />

          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">

        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

    
        
<div className="w-10 h-10 rounded-full">
  {
    user && <img src={user.photoURL} alt="" />
  }
</div>
</label>

{user ? (
          <button onClick={handleLogOut} className="btn bg-[#A3A7D2]">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-[#A3A7D2]">Login</button>
          </Link>
        )}








        </div>
      </div>
    );
};

export default Navbar;
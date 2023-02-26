import React from 'react';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"



const Navbar = () => {

  setDoc(doc(getFirestore(), "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });

  return (
    <div className="navbar bg-red-800">

<div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
    <Link to="/Dashboard" className="btn btn-ghost normal-case text-xl">
    Dashboard
  </Link>
    

  </div>
<div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Discover</a>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Connect</a>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Categories</a>
  </div>

  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">About</a>
  </div>
  
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={require("./profile-image.jpeg")} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

  

    
    
  );
};

export default Navbar;

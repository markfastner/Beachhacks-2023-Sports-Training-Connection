import React from 'react';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import {Link} from 'react-router-dom';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, signInWithRedirect, SignInMethod } from "firebase/auth";
// Add a new document in collection "cities"

function signout(){
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log("signed out");
// Sign-out successful.
}).catch((error) => {
// An error happened.
});
}

const Navbar = () => {

  setDoc(doc(getFirestore(), "cities", "LA"), {
    name: "Los Angeles",
    state: "CAAAAA",
    country: "USA"
  });

  return (
    <div className="navbar bg-red-800">

<div className="flex-1">
  <Link to="/Dashboard">
    <a className="btn btn-ghost normal-case text-xl" style = {{color: "white"}}>Dashboard</a>
    </Link>
  </div>
<div className="flex-1">
  <Link to="/Discover">
    <a className="btn btn-ghost normal-case text-xl" style = {{color: "white"}}>Discover</a>
  </Link>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl" style = {{color: "white"}}>Connect</a>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl" style = {{color: "white"}}>Categories</a>
  </div>

  <div className="flex-1">
    <Link to="/About">
    <a className="btn btn-ghost normal-case text-xl" style = {{color: "white"}}>About</a>
    </Link>
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
        <li>
          <Link to = "/">
          <a onClick={signout}>Logout</a>
          </Link>
          </li>
      </ul>
    </div>
  </div>
</div>

  

    
    
  );
};

export default Navbar;

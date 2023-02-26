import logo from "./logo.svg";
import "./App.css";
import NavBar from "./navbar/NavBar.jsx";
import Dashboard from "./dashboard/Dashboard";
import "./firebase.js";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./views/Dashboard/dashboard.js";
import LandingPage from "./views/LandingPage/landingPage";
import ContactUs from "./views/ContactUsPage/contactUs";
import Categories from "./views/Categories/categories";
import Discover from "./views/Discover/discover";
import NavBar from "./navbar/NavBar.jsx";
import Analytics from "./views/Analytics/analytics";
import "./firebase.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <ContactUs />
    <>
      {/* <NavBar /> */}
      <Discover />
    </>

    //   <Categories />

    // return (

    // <Routes>
    //   <Route path="/LandingPage" element={<LandingPage />} />
    //   <Route path="/Dashboard" element={<Dashboard />} />
    //   <Route path="/ContactUs" element={<ContactUs />} />
    //   <Route path="/Categories" element={<Categories />} />
    //   <Route path="/Discover" element={<Discover />} />
    // </Routes>
    // )
  );
}

export default App;

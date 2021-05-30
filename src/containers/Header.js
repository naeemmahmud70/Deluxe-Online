import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <div className="ui fixed menu">
    //   <div className="ui container center">
    //     <h2>DeluxeOnline</h2>
    //   </div>
    // </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container-fluid">
    <h3><span className="text-style">Royal Planner</span></h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ml-auto ">

          <li class="nav-item mr-5">
            <Link class="nav-link " to="/home">Home</Link>
          </li>
          <li class="nav-item mr-5">
            <Link class="nav-link" to="/">About</Link>
          </li>
          <li class="nav-item mr-5">
            <Link class="nav-link" to="/dashboard">DashBoard</Link>
          </li>
          <li class="nav-item mr-5">
            <Link class="nav-link" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Header;

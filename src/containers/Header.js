import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="banner-background">

      <nav class="navbar navbar-expand-lg navbar-light  fixed-top ">
        <div class="container-fluid">
          <h3><span className="text-style text-black bg-light">DeluxeOnline</span></h3>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ml-auto ">

              <li class="nav-item mr-5  fw-bold ">
                <Link class=" text-black" to="/home">Home</Link>
              </li>
              <li class="nav-item mr-5 fw-bold ">
              <a class="text-black" href="#">About</a>
              </li>
              <li class="nav-item mr-5 fw-bold ">
              <a class="text-black" href="#products">Products</a>
              </li>
              <li class="nav-item mr-5 fw-bold ">
                <a class="text-black" href="#contact">Contact</a>
              </li>
              <li class="nav-item mr-5 fw-bold text-black">
                <Link class=" text-black" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

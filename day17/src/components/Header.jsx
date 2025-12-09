import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

       <NavLink className="navbar-brand fw-bold" to="/">
          Employee Management
        </NavLink>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
             <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
             <NavLink className="nav-link" to="/viewdata">
                View Data
              </NavLink>
            </li>

          </ul>

        
          <form className="d-flex ms-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <button className="btn btn-light ms-2">Search</button>
          </form>

        </div>

      </div>
    </nav>
  );
};

export default Header;

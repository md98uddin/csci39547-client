import React from "react";
import { Link } from "react-router-dom";
import "../../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <Link className="navbar-brand" to="/" id="brand-tab">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-alt">
        <div className="navbar-nav" id="navbar-tabs">
          <Link className="nav-item nav-link" to="/campuses" id="campuses-tab">
            Campuses
          </Link>
          <Link className="nav-item nav-link" to="/students" id="students-tab">
            Students
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

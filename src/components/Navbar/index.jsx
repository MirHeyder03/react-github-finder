import React from "react";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="fa-brands fa-github"></i> Github Finder
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

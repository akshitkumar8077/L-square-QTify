import React from "react";
import logo from "../Navbar/logo.png";
import searchIcon from "../Navbar/search.svg";
import "../Navbar/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search an album of your choice"
        />
        <div className="vertical_line"></div>
        <img src={searchIcon} alt="icon" />
      </div>
      <div className="nav_feedback">
        <button>Give Feedback</button>
      </div>
    </nav>
  );
};

export default Navbar;

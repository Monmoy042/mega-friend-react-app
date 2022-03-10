import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="main-header">
        <NavLink className="main-link" to="/home">
          Home
        </NavLink>
        <NavLink className="main-link" to="/about/:friendId">
          About
        </NavLink>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import "./layout.css";
import { BiHomeAlt } from "react-icons/bi";
import { BsPeople, BsBookmark } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="app">
      <div className="container">
        <header>
          <div className="navbar">
            <NavLink to="/" className="icon-container">
              <BiHomeAlt className="icon" />
            </NavLink>
            <NavLink to="/post" className="icon-container">
              <FiSearch className="icon" />
            </NavLink>
            <NavLink to="/user" className="icon-container">
              <BsPeople className="icon" />
            </NavLink>
            <NavLink to="/saved" className="icon-container">
              <BsBookmark className="icon" />
            </NavLink>
          </div>
        </header>
        <div className="">{children}</div>
      </div>
    </div>
  );
}

export default Layout;

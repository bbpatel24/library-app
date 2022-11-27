import React from "react";
import logo from "../assets/Library.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar-container ">
      <nav>
        <figure className="navbar-logo-wrapper">
          <img src={logo} alt="LibraryLogo" className="navbar-logo-image" />
        </figure>
        <ul className="navbar-list">
          <li className="navbar-links">
            <Link to="/" className="link" key={Math.random()}>
              Home
            </Link>
          </li>
          <li className="navbar-links">
            <Link to="books" className="link" key={Math.random()}>
              Books
            </Link>
          </li>
          <li className="navbar-links" key={1}>
            <Link to="cart" className="link" key={Math.random()}>
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;

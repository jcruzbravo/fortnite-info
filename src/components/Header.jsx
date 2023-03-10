import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="home" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/challenges">Challenges</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

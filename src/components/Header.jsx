import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/Header.scss";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="menu-mobile-icon" onClick={() => handleMenuClick()}>
        <GiHamburgerMenu />
      </div>
      {showMenu && <MenuMobile />}
      <Link to="/home">
        <img src={logo} alt="home" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/challenges">Challenges</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search Account</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/Logo.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
const Header = () => {
  return (
    <header className="d-flex justify-content-between">
      <div className="header-socials-media d-flex align-items-center">
        <ul className="m-0 d-flex align-items-center">
          <li className="mx-1 header-social-item">
            <Link to="/facebook">
              <BsFacebook />
            </Link>
          </li>
          <li className="mx-1 header-social-item">
            <Link to="/instagram">
              <BsInstagram />
            </Link>
          </li>
          <li className="mx-1 header-social-item">
            <Link to="/twitter">
              <BsTwitter />
            </Link>
          </li>
          <li className="mx-1 header-social-item">
            <Link to="/pinterest">
              <BsPinterest />
            </Link>
          </li>
        </ul>
      </div>
      <nav className="d-flex align-items-center">
        <ul className="m-0 d-flex align-items-center">
          <li>
            <Link className="header-navlinks mx-3" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header-navlinks mx-3" to="/recipe">
              Recipes
            </Link>
          </li>
          <li>
            <Link className="header-navlinks mx-3" to="/forum">
              Forum
            </Link>
          </li>
          <li>
            <img src={logo} alt="Brand_logo" height={"70px"} />
          </li>
          <li>
            <Link className="header-navlinks mx-3" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="header-navlinks mx-3" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="header-navlinks mx-3" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="auth d-flex align-items-center justify-content-center">
        <Link to="/auth/register">Register</Link>

        <Link to="/auth/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;
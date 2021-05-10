import React from "react";
import "./Header.css";
import bouycut from "../Images/bouycut.png";
import SecurityIcon from "@material-ui/icons/Security";
import GradeIcon from "@material-ui/icons/Grade";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={bouycut} alt="" />
      </Link>

      <div className="header__right">
        <Link to="/civ">
          <PersonIcon className="header__icon" />
        </Link>

        <Link to="/vet">
          <GradeIcon className="header__icon" />
        </Link>

        <Link to="/first">
          <SecurityIcon className="header__icon" />
        </Link>
      </div>
      <Link to="/chat">
        <div className="header__center">
          <ChatIcon className="header__icon" />
        </div>
      </Link>
      <div className="header__left">
        <Link to="/store">
          <StorefrontIcon className="header__icon" />
        </Link>

        <Link to="/checkout">
          <ShoppingCartIcon className="header__icon" />
        </Link>
        {/*log in */}
        <LockOpenIcon className="header__icon" />
        {/*log out */}
        <LockIcon className="header__icon" />
      </div>
    </div>
  );
}

export default Header;

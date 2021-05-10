import React from "react";
import "./Header.css";
import bouycut from "../Images/bouycut.png";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import PolicyIcon from "@material-ui/icons/Policy";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';

import { Link } from "react-router-dom";


function Header() {


  return (
    <div className="header">
      <div>
        <img className="header__logo" src={bouycut} alt="logo" />
      </div >
      <div className="headerIcons">
        <Link to="/home">
          <MoodBadIcon />
        </Link>

        <Link to="/civ">
          <div className="headerIcons">
            <PersonIcon />
          </div>
        </Link>

        <Link to="/vet">
          <div className="headerIcons">
            <PolicyIcon />
          </div>
        </Link>

        <Link to="/first">
          <div className="headerIcons">
            <LocalHospitalIcon />
          </div>
        </Link>

      </div>
      <Link to="/chat">
        <div className="headerCenter">
          <ChatIcon/>
        </div>
      </Link>
      <div className="headerLeft">
        <Link to="/store">
          <StorefrontIcon/>
        </Link>

       
        <Link to="/checkout">
          <div className="headerLeft">
            <ShoppingCartIcon />
           
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
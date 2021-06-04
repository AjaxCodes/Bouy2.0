import React from "react";
import "./Storefront.css";
import Products from "./Products";
import whitepink from "../Images/whitepink.png";
import whiteblue from "../Images/whiteblue.png";
import whitegreen from "../Images/whitegreen.png";
import blackbblue from "../Images/blackbblue.png";
import whitebblue from "../Images/whitebblue.png";
import whitepurple from "../Images/whitepurple.png";
import whiteyellow from "../Images/whiteyellow.png";
import blackpink from "../Images/blackpink.png";
import blackblue from "../Images/blackblue.png";
import blackgreen from "../Images/blackgreen.png";
import blackorange from "../Images/blackorange.png";
import blackpurple from "../Images/blackpurple.png";
import blackyellow from "../Images/blackyellow.png";
import whiteorange from "../Images/whiteorange.png";
function Storefront() {
  return (
    <div className="storefront">
      <div className="storefront__container">
        <div className="storefront__row">
          <Products
            title="Black Shirt Orange Logo"
            price={20.0}
            image={blackorange}
          />{" "}
          <Products
            title="White Shirt Blue Logo"
            price={20.0}
            image={blackblue}
          />
        </div>

        <div className="storefront__row">
          <Products
            title="Black Shirt Green Logo"
            price={20.0}
            image={blackgreen}
          />
          <Products
            title="White Shirt Pink Logo"
            price={20.0}
            image={blackpink}
          />
          <Products
            title="White Shirt Yellow Logo"
            price={20.0}
            image={blackyellow}
          />
          <Products
            title="Black Shirt Purple Logo"
            price={20.0}
            image={blackpurple}
          />
          <Products
            title="Black Shirt Purple Logo"
            price={20.0}
            image={blackbblue}
          />
        </div>
        <div className="storefront__row">
          <Products
            title="Black Shirt Orange Logo"
            price={20.0}
            image={whiteorange}
          />
          <Products
            title="White Shirt Blue Logo"
            price={20.0}
            image={whiteblue}
          />
        </div>

        <div className="storefront__row">
          <Products
            title="Black Shirt Green Logo"
            price={20.0}
            image={whitegreen}
          />
          <Products
            title="White Shirt Pink Logo"
            price={20.0}
            image={whitepink}
          />
          <Products
            title="White Shirt Yellow Logo"
            price={20.0}
            image={whiteyellow}
          />

          <Products
            title="Black Shirt Purple Logo"
            price={20.0}
            image={whitepurple}
          />
          <Products
            title="Black Shirt Purple Logo"
            price={20.0}
            image={whitebblue}
          />
        </div>
      </div>
    </div>
  );
}

export default Storefront;

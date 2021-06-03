import React from "react";
import "./Storefront.css";
import Products from "./Products";
import pink from "../Images/pink.png";
import blue from "../Images/blue.png";
import green from "../Images/green.png";
import orange from "../Images/orange.png";
import purple from "../Images/purple.png";
import yellow from "../Images/yellow.png";
import whiteorange from "../Images/whiteorange.png"
function Storefront() {
  return (
    <div className="storefront">
      <div className="storefront__container">
        <div className="storefront__row">
          <Products title="White Shirt Pink Logo"  price="20" image={pink} />
          <Products title="White Shirt Blue Logo" price="20" image={blue} />
        </div>
        <div className="storefront__row">
          <Products title="Black Shirt Green Logo" price="20" image={green} />
          <Products title="Black Shirt Orange Logo" price="20" image={orange} />
          <Products title="Black Shirt Purple Logo" price="20" image={purple} />
        </div>
        <div className="storefront__row">
          <Products title="White Shirt Yellow Logo" price="20" image={yellow} />
          <Products title="White Shirt Pink Logo" price="20" image={whiteorange} />
        </div>
      </div>
    </div>
  );
}

export default Storefront;

import React from "react";
import "./Storefront.css";
import Products from "./Products";

function Storefront() {
  return (
    <div className="storefront">
      
      <div className="storefront__row">
        <Products />
        <Products />
      </div>
      <div className="storefront__row">
        <Products />
      </div>
      <div className="storefront__row">
        <Products />
        <Products />
      </div>
      <div className="storefront__row">
        <Products />
       
      </div>
    </div>
  );
}

export default Storefront;

import React from "react";
import "./Cart.css";
import Subtotal from "./Subtotal"
function Cart() {
  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3 className="cart__title">Your cart</h3>
        </div>
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;

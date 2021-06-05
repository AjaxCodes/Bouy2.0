import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {  useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({0} items)
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />
      <br/>
    <button onClick={e => history.push('/payment')}>Pay Now</button>
    </div>
  );
}


export default Subtotal;

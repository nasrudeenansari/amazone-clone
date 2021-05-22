import React from "react";
import "../Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../reducer";
export default function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="sub_total">
              Subtotal ({` ${basket.length} items`}):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button type="button" class="btn btn-outline-primary">
        Proceed to checkout
      </button>
    </div>
  );
}

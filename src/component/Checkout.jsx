import React from "react";
import "../Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ads"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_jpg"
          alt="checkout_page_ad"
        />
        <div>
          <h2 className="checkout_title">Your shopping Basket</h2>
  
          {basket.map((item) => (
            <CheckoutProduct
              product_id={item.product_id}
              product_title={item.product_title}
              product_img={item.product_img}
              produc_price={item.produc_price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

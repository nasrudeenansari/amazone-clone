import React from "react";
import "../CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

export default function CheckoutProduct({
  product_title,
  product_id,
  produc_price,
  product_img,
  rating,
}) {
    const[{basket},dispatch]=useStateValue();
    const removeToBasket =()=>{
      dispatch({
        type:"REMOVE_TO_BASKET",
          product_id:product_id,
      })
    }
  return (
    <div className="checkout_product">
      <img className="checkout_image" src={product_img} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{product_title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{produc_price}</strong>
      
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐ </p>
            ))}
        </div>
        <button onClick={removeToBasket}> Remove from Basket</button>
      </div>
    </div>
  );
}

import React from "react";
import "../Product.css";
import { useStateValue } from "./StateProvider";

export default function Product({
  product_title,
  product_id,
  produc_price,
  product_img,
  rating,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        product_id: product_id,
        product_title: product_title,
        produc_price: produc_price,
        product_img: product_img,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <div className="product_details">
          <p className="product_title">
            {" "}
            <strong>{product_title}</strong>{" "}
          </p>
          <p className="product_price">
            {" "}
            <small>$ </small> <strong>{produc_price}</strong>{" "}
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p> ⭐ </p>
              ))}
          </div>
        </div>
        <img src={product_img} alt="img" />
        <button onClick={addToBasket} className="btn">
          Add to Basket
        </button>
      </div>
    </div>
  );
}

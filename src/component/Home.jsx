import React from "react";
import Product from "./Product";
import "../Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />

        {/* All Products */}

        <div className="product_row">
          <Product
            product_title="Beyond Infinity Paperback – 5 September 2019 "
            product_id="1"
            produc_price={30}
            rating={5}
            product_img="https://m.media-amazon.com/images/P/B07XTLBRLZ.01._SCLZZZZZZZ_SX500_.jpg"
          />
          <Product
            product_title="Unique King Name of Trust for Compartable Apple Airpods Pro with Wireless Charging Case Active Noise Cancellation Enabled "
            product_id="2"
            produc_price={30}
            rating={4}
            product_img="https://images-na.ssl-images-amazon.com/images/I/21LVIMxg5VL._AC_.jpg"
          />
        </div>
        <div className="product_row">
          <Product
            product_title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            product_id="3"
            produc_price={99}
            rating={3}
            product_img="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._AC_SL1100_.jpg"
          />
          <Product
            product_title="New Apple iPhone 11 (128GB) - Black"
            product_id="4"
            produc_price={540}
            rating={4}
            product_img="https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_SL1500_.jpg"
          />
          <Product
            product_title="Gopro AJDBD-001-EU Dual Battery Charger + Battery for HERO8 Black / HERO7 Black "
            product_id="5"
            produc_price={230}
            rating={5}
            product_img="https://images-na.ssl-images-amazon.com/images/I/51S8TCBrLoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="product_row">
          <Product
            product_title="AmazonBasics 139cm (55 inches) Fire TV Edition 4K Ultra HD Smart LED TV AB55U20PS (Black)"
            product_id="6"
            produc_price={600}
            rating={5}
            product_img="https://images-na.ssl-images-amazon.com/images/I/81c5klKpUdL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

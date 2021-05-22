import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link } from "react-router-dom";
import "../Header.css";
import logo from "../img/logo.png";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

export default function Header() {
  const [{ basket,user }, dispatch] = useStateValue();
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header_logo" alt="logo" />
      </Link>

      <div className="header_search">
        <input type="text" className="search_input" />
        <SearchIcon style={{ fontSize: 35 }} className="search_icon " />
      </div>

      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="line_one">Hello {user?.email}</span>
            <span className="line_two">{user ? 'Sign Out':'Sign In'}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="line_one">Returns</span>
          <span className="line_two">& Orders</span>
        </div>
        <div className="header_option">
          <span className="line_one">Your</span>
          <span className="line_two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="basket_icon">
            {" "}
            <ShoppingCartIcon
              style={{ fontSize: 28, color: "white" }}
              className=" "
            />
            <span className="basket_count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

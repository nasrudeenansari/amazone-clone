import React, { useState } from "react";
import "../Login.css";
import logo from "../img/logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth)=>{
        history.push('/')
    })
    .catch((error)=>{
        alert(error.message) 
    });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="logoin_page">
      <img
        className="login_page_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt=""
      />
      <div className="login_container">
        <h1>Sign in</h1>
        <form action="">
          <h5>Name</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Sign in
          </button>
          <p>
            By signing-in you agree to the Amazone Fake Clone Conditions of Use
            and Sale please see our Cookies Notic and interest-based Ads Notice.
          </p>
        </form>
        <button onClick={register}> Create your Amazone Account</button>
      </div>
    </div>
  );
}

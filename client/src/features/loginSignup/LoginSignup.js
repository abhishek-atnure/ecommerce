import React from "react";
import "./loginSignup.css";
import Login from "../../components/login/Login";

export default function LoginSignup({ setAuth }) {
  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <h1 id="banner-text">Let's Make Your Order</h1>
        </section>
      </div>
      <Login />
    </div>
  );
}

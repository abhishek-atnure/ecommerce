import React from "react";
import "./signupLogin.css";
import Signup from "../../components/signup/Signup";

export default function LoginSignup() {
  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <h1 id="banner-text">Let's Make Your Order</h1>
        </section>
      </div>
      <Signup />
    </div>
  );
}

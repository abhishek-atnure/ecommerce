import React, { Fragment, useState, useEffect } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, clearState, userSelector } from "../../slices/userSlice";
import { toast } from "react-toastify";

toast.configure();
export default function Signup() {
  const [inputs, setInputs] = useState({
    user_name: "",
    name: "",
    password: "",
    contact_num: "",
  });

  const dispatch = useDispatch();

  const { hasError } = useSelector(userSelector);

  const { user_name, name, password, contact_num } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    dispatch(signupUser(inputs));

  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (hasError) {
      toast.error("try again");
      dispatch(clearState());
    }
  });

  return (
    <Fragment>
      <div className="right">
        <form required>
          <section className="copy">
            <h2 id="signup-h2">Sign up</h2>
            <div className="login-container">
              <p id="signup-p">
                Already have an account?{" "}
                <Link to="/login" id="signup-a">
                  <strong>Log in</strong>
                </Link>
              </p>
            </div>
          </section>
          <div className="input-container name">
            <label htmlFor="fname"> Full Name</label>
            <input
              id="fname"
              name="name"
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            ></input>
          </div>

          <div className="input-container email">
            <label htmlFor="email"> Email Id</label>
            <input
              id="email"
              name="user_name"
              type="email"
              placeholder="your email id"
              value={user_name}
              onChange={(e) => onChange(e)}
              required
            ></input>
          </div>

          <div className="input-container num">
            <label htmlFor="num"> Contact number</label>
            <input
              id="num"
              name="contact_num"
              type="number"
              minLength="10"
              maxlength="10"
              placeholder="your phone number"
              value={contact_num}
              onChange={(e) => onChange(e)}
              required
            ></input>
          </div>

          <div className="input-container password">
            <label htmlFor="password"> Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="your password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            ></input>
          </div>
          <Link to="/login" >
            <button className="signup-btn" onClick={(e) => handleSubmit(e)}>
              Sign Up
          </button> </Link>
        </form>
      </div>
    </Fragment>
  );
}

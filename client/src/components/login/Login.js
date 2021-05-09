import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./login.css";
import { Link } from "react-router-dom";
import { userSelector, loginUser, clearState } from "../../slices/userSlice";

export default function Login() {
  const [inputs, setInputs] = useState({
    user_name: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { hasError } = useSelector(userSelector);

  const { user_name, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    dispatch(loginUser(inputs));



  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (hasError) {
      dispatch(clearState());
    }
  });

  return (
    <Fragment>
      <div className="right">
        <form>
          <section className="copy">
            <h2 id="log-in-text">Log in</h2>
            <div className="login-container">
              <p id="line-text">
                Don't have an account?{" "}
                <Link to="/register">
                  <strong>Sign Up</strong>
                </Link>
              </p>
            </div>
          </section>

          <div className="input-container email">
            <label htmlFor="email"> Email Id</label>
            <input
              id="email"
              name="user_name"
              type="email"
              value={user_name}
              onChange={(e) => onChange(e)}
              placeholder="your email id"
              required
            ></input>
          </div>

          <div className="input-container password">
            <label htmlFor="password"> Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => onChange(e)}
              placeholder="your password"
              required
            ></input>
          </div>
          <Link to="/">
            <button className="signup-btn" onClick={(e) => handleSubmit(e)}>
              Log in
          </button>
          </Link>
        </form>
      </div>
    </Fragment>
  );
}

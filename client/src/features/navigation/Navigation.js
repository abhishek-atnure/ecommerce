import React from "react";
import { Profile } from "../../components/profile/Profile";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { singleCartFetch } from "../../slices/cartSlice";
import { userSelector } from "../../slices/userSlice";

export function Navigation() {
  const dispatch = useDispatch();
  const { cart_id } = useSelector(userSelector);
  const loadCart = () => {
    dispatch(singleCartFetch(cart_id));
  };

  return (
    <div className="nav">
      <ul className="nav-items">
        <li className="profile1">
          {" "}
          <Profile />
        </li>
        <Link to="/">
          <li className="about-icon">Home</li>
        </Link>
      </ul>
      <Link to="/cart" onClick={(e) => loadCart()}>
        <span className="cart-icon">
          <FontAwesomeIcon icon={faShoppingBag} />
        </span>
      </Link>
    </div>
  );
}

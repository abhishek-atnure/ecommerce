import React, { useState } from "react";
import "./checkout.css";
import Modal from "react-modal";
import ShoppingBag from "./shopping-bag.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../../slices/cartSlice";
import { userSelector, user, cart } from "../../slices/userSlice";
import { makeOrder } from "../../slices/orderSlice";
import { calculateTotal } from "../../util/util";
import { toast } from "react-toastify";

Modal.setAppElement("#root");
export default function Checkout() {
  const { user_name } = useSelector(userSelector);
  const one = useSelector(cart);
  const two = useSelector(user);
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCart);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [cart_id, setCart_id] = useState(one);
  const [user_id, setUser_id] = useState(two);
  const total = calculateTotal(cartProducts);

  const time = new Date();
  const placeOrder = () => {
    if (!address) {
      toast.error("Please enter your address");
    } else {
      dispatch(makeOrder({ cart_id, user_id, address, time }));
      setModalIsOpen(true);
    }
  };
  return (
    <div className="checkout-page">
      <div>
        <div>
          <h1 id="checkout-name">
            Let's Make Your Order
            <img src={ShoppingBag} alt="" height="30px" width="30px"></img>,{" "}
            <span>{user_name}</span>
          </h1>
          <h3 id="checkout-amount">
            Cart Amount: <span id="checkout-amount-span">₹ {total}</span>
          </h3>
        </div>

        <div className="address-detail">
          <label for="address">Adddress</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>

        <div className="payment">
          <h3 id="payment-head">Payment Methods</h3>
          <div className="methods">
            <input id="methods-method" type="radio" disabled></input>
            <label for="methods-method">Debit Card</label>
          </div>
          <span>Temporarily not available</span>

          <div className="methods">
            <input id="credit-method" type="radio" disabled></input>
            <label for="credit-method">Credit Card</label>
          </div>
          <span>Temporarily not available</span>

          <div className="methods">
            <input id="cod-method" type="radio" required defaultChecked></input>
            <label for="cod-method">Cash On Delivery</label>
          </div>
        </div>
      </div>
      <button
        id="last-btn"
        onClick={() => {
          placeOrder();
        }}
      >
        Place Order
      </button>

      <div className="modal">
        <Modal
          style={{
            overlay: {
              position: "fixed",
              inset: "0px",

              "backdrop-filter": "blur(6px)",
            },
            content: {
              position: "absolute",
              inset: "30%",
              border: "1px solid rgb(204, 204, 204)",
              background: "rgb(0 0 0)",
              "border-radius": "8px",
              outline: "none",
              width: "40%",
              padding: "20px",
              "backdrop-filter": "blur(10px)",
              "margin-left": "-15px",
            },
          }}
          isOpen={modalIsOpen}
        >
          <div className="modal-content">
            <h3 id="tagline">hooray!🎉, Order is Placed</h3>
            <Link to="/">
              <button id="modal-btn" onClick={() => setModalIsOpen(false)}>
                back to products
              </button>
            </Link>
          </div>
        </Modal>
      </div>
    </div>
  );
}

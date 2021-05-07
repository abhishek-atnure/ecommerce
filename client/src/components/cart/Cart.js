import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  removeOneProduct,
  deleteCart,
  singleCartFetch,
} from "../../slices/cartSlice";
import { userSelector } from "../../slices/userSlice";
import { calculateTotal } from "../../util/util";
import "./cart.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCart);
  const { cart_id } = useSelector(userSelector);

  const handleChange = async (e, product) => {
    let product_id = product.id;
    const quantity = e.target.value;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity, product_id, cart_id }),
    };
    await fetch("/api/cart", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    dispatch(singleCartFetch(cart_id));
  };

  const deleteProduct = (product) => {
    let product_id = product.id;
    dispatch(removeOneProduct({ cart_id, product_id }));
    dispatch(singleCartFetch(cart_id));
  };

  const deleteWhole = (e) => {
    dispatch(deleteCart(cart_id));
    dispatch(singleCartFetch(cart_id));
  };
  const total = calculateTotal(cartProducts);

  return (
    <Fragment>
      <div className="body">
        <button id="clear-all-btn" onClick={(e) => deleteWhole(e)}>
          Clear all
        </button>
        <span id="cart-text">your cart</span>
        {cartProducts.map((product) => (
          <div className="cart-page" key={product.id}>
            <img id="orders-img" src={product.img} alt={product.name}></img>

            <div className="cart-page_info">
              <div className="cart-page_date">
                <h1 className="cart-page_title">{product.name}</h1>
                <h1 className="cart-page_price"> ₹ {product.price}</h1>
                <h1 className="cart-page_price">
                  {" "}
                  Quantity: {product.quantity}
                </h1>
                <p className="cart-page_text">{product.description}</p>
              </div>
              <div className="cart-page_buttons">
                <a
                  className="cart-page_cta"
                  href="#/"
                  onClick={() => deleteProduct(product)}
                >
                  Delete
                </a>
                <select
                  id="cart-page_cta"
                  onChange={(e) => handleChange(e, product)}
                >
                  {[...Array(100).keys()].map((_, index) => (
                    <option key={index} value={1 + index}>
                      {1 + index}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}

        <div className="checkout" id="checkout">
          <span>Total Amount</span>
          <span className="checkout-total">₹ {total}</span>
          <div>
            <Link to="/checkout">
              <button id="checkout-btn">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

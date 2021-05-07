import React, { useEffect } from "react";
import "./orders.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, selectAllOrders } from "../../slices/orderSlice";
import { userSelector } from "../../slices/userSlice";

export default function Orders() {
  const dispatch = useDispatch();
  const allOrders = useSelector(selectAllOrders);
  const { user_id } = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchOrders(user_id));
  }, [dispatch]);

  return (
    <div className="body">
      <span id="order-text">your orders</span>
      {allOrders.map((product) => (
        <div className="order-page">
          <img id="orders-img" src={product.image} alt={product.name}></img>

          <div className="order-page_info">
            <div className="order-page_date">
              <span id="new-date">
                {" "}
                {!product.time ? null : product.time.slice(0, 10)}
              </span>

              <h1 className="order-page_title">{product.name}</h1>
              <h1 className="order-page_price"> ₹ {product.price}</h1>
              <h1 className="order-page_price">
                {" "}
                Quantity : {product.quantity}
              </h1>
              <p className="order-page_text">{product.description}</p>
            </div>
            <div className="order-page_buttons">
              <h3>
                <span id="order-page_status">Status:</span>
                <span id="order-page_cta">{product.order_status}</span>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

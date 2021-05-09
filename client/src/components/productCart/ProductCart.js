import React, { Fragment } from "react";
import "./productCart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { cartFetch, selectCart, singleCartFetch } from "../../slices/cartSlice";
import { userSelector } from "../../slices/userSlice";
import { authSelector } from "../../slices/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export function ProductCart({ product, children }) {
  const { cart_id } = useSelector(userSelector);
  const { auth } = useSelector(authSelector);
  const cartProducts = useSelector(selectCart);

  const dispatch = useDispatch();

  const toCart = (product) => {
    const product_id = product.id;
    if (cartProducts.find((item) => item.id === product.id) !== undefined) {
      toast.error("Already exist in cart !");
    } else {
      dispatch(cartFetch({ cart_id, product_id }));
      alert("Product added to cart");
      toast.success("added to cart");
      dispatch(singleCartFetch(cart_id));
    }
  };

  return (
    <Fragment>
      <div key={product.id} className="product">
        <div id="product-sub">
          <img src={product.img_url} alt={product.name}></img>
        </div>

        <h3 id="product-name">{product.name}</h3>
        <span id="product-price">₹ {product.price}</span>
        {/*   <button
          id="add-to-cart"
          onClick={() =>
            !auth ? (window.location = "/login") : toCart(product)
          }
        >
          Add to Cart
        </button>*/}
        {
          !auth ? <Link to="/login"><button id="add-to-cart">Add to cart</button></Link> :
            <button id="add-to-cart" onClick={() => toCart(product)}>Add to cart</button>
        }
      </div>
    </Fragment>
  );
}

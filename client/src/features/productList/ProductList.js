import React, { Fragment } from "react";
import "./productList.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredAllProducts } from "../../slices/productSlice";
import { selectAllCategory } from "../../slices/productSlice";
import { setCategory } from "../../slices/categorySlice";
import { setSortby } from "../../slices/sortbySlice";

import { ProductCart } from "../../components/productCart/ProductCart";

export function ProductList() {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectFilteredAllProducts);
  const allCategory = useSelector(selectAllCategory);
  const { isLoading } = useSelector((state) => state.allProducts);

  const changeCat = (e) => {
    console.log(e.target.value);
    dispatch(setCategory(e.target.value));
  };

  const changeSortby = (e) => {
    dispatch(setSortby(e.target.value));
  };

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <Fragment>
      <div className="product-container">
        <div className="category-btns">
          <select className="cat-btns" onChange={(e) => changeCat(e)}>
            <option value="">All Categories</option>
            {allCategory.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          <select className="cat-btns" onChange={(e) => changeSortby(e)}>
            <option value="" key="1">
              Sort by Price
            </option>
            <option value="Lowest" key="2">
              Lowest - Highest
            </option>
            <option value="Highest" key="3">
              Highest - Lowest
            </option>
          </select>
        </div>
        <div className="allProducts">
          {allProducts.map((product) => (
            <ProductCart product={product} key={product.id} />
          ))}
        </div>
        {/* <div id="total-amount">Total amount   <span> ₹ 2000</span></div>*/}
      </div>
    </Fragment>
  );
}

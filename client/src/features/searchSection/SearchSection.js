import React, { useEffect } from "react";
import { SearchTerm } from "../../components/searchTerm/SearchTerm";
import { ProductList } from "../productList/ProductList";
import "./searchSection.css";
import { useDispatch } from "react-redux";
import { fetchByToken } from "../../slices/userSlice";

export function SearchSection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchByToken());
  });
  return (
    <div className="search-section">
      <div className="banner"> Shopy </div>
      <SearchTerm />
      <ProductList />
    </div>
  );
}

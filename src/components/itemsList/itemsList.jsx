import React, { useEffect, useState } from "react";
import { getReview } from "../../assets/helpFunctions";
import { getDiscount } from "../../assets/helpFunctions";
import "./itemsList.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../assets/helpFunctions";

export default function ({ products, cart, setCart, setProduct }) {
  const openItem = (item) => {
    setProduct(item);
  };

  return (
    <div className="itemsList">
      {products.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="image">
              <img src={item.thumbnail} alt="" />
            </div>
            <h3 onClick={() => openItem(item)}>
              <Link to="/products_page/product">{item.title}</Link>
            </h3>
            <p>{item.description}</p>
            <h3>⭐️ {getReview(item.reviews)}</h3>
            <p>{item.tags.map((tag) => " " + tag)}</p>
            <h2>${item.price}</h2>
            <h2>
              Discount: ${getDiscount(item.price, item.discountPercentage)} (-{" "}
              {item.discountPercentage}%)
            </h2>
            <div className="addButton">
              <button onClick={() => addToCart(item, cart, setCart)}>
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

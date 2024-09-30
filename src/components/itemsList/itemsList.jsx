import React, { useEffect, useState } from "react";
import { getReview } from "../../assets/helpFunctions";
import { getDiscount } from "../../assets/helpFunctions";
import "./itemsList.css";

export default function ({ products, cart, setCart }) {
  function addToCart(product) {
    let isProductInCart = cart.filter((p) => p.id === product.id);

    if (isProductInCart.length > 0) {
      let updCart = cart.map((el) =>
        el.id === product.id ? { ...el, countInCart: el.countInCart + 1 } : el
      );
      setCart(updCart);
    } else {
      setCart([...cart, { ...product, countInCart: 1 }]);
    }
  }
  return (
    <div className="itemsList">
      {products.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="image">
              <img src={item.thumbnail} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>⭐️ {getReview(item.reviews)}</h3>
            <p>{item.tags.map((tag) => " " + tag)}</p>
            <h2>${item.price}</h2>
            <h2>
              Discount: ${getDiscount(item.price, item.discountPercentage)} (-{" "}
              {item.discountPercentage}%)
            </h2>
            <div className="addButton">
              <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import "./Cart.css";
import { totalItemsCost } from "../../assets/helpFunctions";
import { getDiscount } from "../../assets/helpFunctions";

export default function Cart({ isCartOpen, setIsCartOpen, cart, setCart }) {
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addOne = (product) => {
    let updCart = cart.map((el) =>
      el.id === product.id ? { ...el, countInCart: el.countInCart + 1 } : el
    );
    setCart(updCart);
  };

  const lessOne = (product) => {
    let updCart = cart.map((el) =>
      el.id === product.id && el.countInCart > 1
        ? { ...el, countInCart: el.countInCart - 1 }
        : el
    );
    setCart(updCart);
  };

  const deleteFromCart = (product) => {
    const updCart = cart.filter((el) => el.id !== product.id);
    setCart(updCart);
  };
  return (
    <div
      className="cartMain"
      style={isCartOpen ? { display: "flex" } : { display: "none" }}
    >
      <div className="cartDiv">
        <div className="closeBtnDiv">
          <button onClick={closeCart}>X</button>
        </div>

        {cart.map((item) => (
          <div key={item.id} className="cartItem">
            <img src={item.thumbnail} alt="" />
            <p>{item.title}</p>
            <h3>${getDiscount(item.price, item.discountPercentage)}</h3>
            <div className="quantity">
              <b>quantity:</b>
              <div className="countBtns">
                <button onClick={() => lessOne(item)}>&lt;</button>
                <h4>{item.countInCart}</h4>
                <button onClick={() => addOne(item)}>&gt;</button>
              </div>
            </div>
            <div className="delDiv">
              <button onClick={() => deleteFromCart(item)} className="delete">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="totalDiv">
        <div className="total">Total: ${totalItemsCost(cart)}</div>
        <button
          onClick={
            cart.length > 0
              ? () => alert("Order was successful confirmed")
              : () => alert("have no items in cart")
          }
        >
          Place your Order
        </button>
      </div>
    </div>

    
  );
}

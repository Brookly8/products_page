import React, { useEffect, useState } from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import { allCategories } from "../../assets/helpFunctions";

export default function Header({
  cart,
  setCart,
  products,
  onChangeCategory,
  onSearchClick,
  setInput,
}) {
  const [isCardOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };
  const search = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <Cart
        isCartOpen={isCardOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        setCart={setCart}
      />
      <header>
        <select onChange={onChangeCategory} name="category" id="form">
          <option value="All">All</option>
          {allCategories(products).map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <div className="searchDiv">
          <button onClick={onSearchClick}>Search</button>
          <input
            onChange={(e) => search(e)}
            placeholder=" Search"
            type="text"
          />
        </div>
        <button onClick={openCart} className="cartButton">
          My Cart
        </button>
      </header>
    </>
  );
}

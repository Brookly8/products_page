import "./Product.css";
import { getDiscount } from "../../assets/helpFunctions";
import { addToCart } from "../../assets/helpFunctions";

export const Product = ({ product, cart, setCart }) => {
  console.log(product);
  return (
    <>
      <div className="productDiv">
        <img src={product.thumbnail} alt="" />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h4>⭐️ {product.rating}</h4>
        <h3>${product.price}</h3>
        <h3>
          Discount: ${getDiscount(product.price, product.discountPercentage)} (-{" "}
          {product.discountPercentage}%)
        </h3>
        <button className="addBtn" onClick={() => addToCart(product, cart, setCart)}>
          Add to cart
        </button>
      </div>
    </>
  );
};

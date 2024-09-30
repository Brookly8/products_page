import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./api/api";
import ItemsList from "./components/itemsList/itemsList";
import Header from "./components/Header/Header";
import { productsFilter } from "./assets/helpFunctions";
import { getSearchedData } from "./api/api";

let api = "https://dummyjson.com/products?limit=50";
let searchApi = "https://dummyjson.com/products/search?q=";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [input, setInput] = useState("");

  const onSearchClick = async () => {
    setCategory(await getSearchedData(searchApi, input));
  };

  useEffect(() => {
    async function getProducts() {
      const data = await getData(api);
      setProducts(data.products);
      setCategory(data.products);
    }
    getProducts();
  }, []);

  const onChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (selectedCategory === "All") {
      setCategory(products);
    } else {
      productsFilter(selectedCategory, setCategory, products);
    }
  }, [selectedCategory]);
  return (
    <>
      <Header
        setInput={setInput}
        onSearchClick={onSearchClick}
        cart={cart}
        setCart={setCart}
        products={products}
        onChangeCategory={onChangeCategory}
      />
      <ItemsList products={categories} cart={cart} setCart={setCart} />
    </>
  );
}

export default App;

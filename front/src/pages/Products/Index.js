import { useEffect, useState } from "react";
import styles from "./Products.module.css";
//import Product from '@/Components/Product/Product'
import axios from "axios";

export default function products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await axios.get("http://localhost:3001/products");
    setProducts(result.data);
    console.log(products);
  };
  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);
  return (
    <div>
      <h1>this is Productos</h1>
      {products?.forEach((e) => (
        <a>{e.title}</a>
      ))}
    </div>
  );
}

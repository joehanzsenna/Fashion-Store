import React, { useEffect, useState } from "react";
import "./Products.css";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  let api = "https://fakestoreapi.com/products?limit=5";

  const dataFetching = async () => {
    try {
      setLoading(true);
      const response = await fetch(api);
      const data = await response.json();
      setProducts(data);
    } catch {
      setError(`Oops something is wrong`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <div className="product">
      <div className="productHeading">
        <h1>Shop Items</h1>
        {loading && <ClipLoader />}
        <h2>{error}</h2>
      </div>

      <div className="productContents">
        {products.map((product) => (
          <div className="productItem" key={product.id}>
            <img src={product.image} alt="" className="productImg" />
            <div className="productText">
              <h3>{product.category}</h3>
              <h3>{product.price}</h3>
            </div>
            <div className="productBtn">
              <button className="productBtn01">Add to cart</button>
              <Link to={`/products/${product.id}`}>
                <button className="productBtn02">Preview</button>
              </Link>
            </div>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

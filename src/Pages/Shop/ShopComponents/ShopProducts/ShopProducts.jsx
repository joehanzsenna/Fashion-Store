import React, { useEffect, useState } from "react";
import "./ShopProducts.css";
import ClipLoader from "react-spinners/ClipLoader";

function ShopProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //   let api = `https://fakestoreapi.com/products?limit=5`;
  let api = "https://fakestoreapi.com/products";

  const dataFetching = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setProducts(data);

      setLoading(false);
    } catch (error) {
      setError("Oops something is wrong");
      console.log(error);
    } finally {
      console.log("Now we are live");
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <div className="shopHero">
      <div className="shopHeroHeading">
        <h1>Shop Items </h1>
        {loading && <ClipLoader />}
        <h2>{error}</h2>
      </div>
      <div className="shopHeroContents">
        {products.map((product) => (
          <div className="productItem" key={product.id}>
            <img src={product.image} alt="" className="productImg" />
            <h2>{product.category}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopProducts;

import React, { useEffect, useState } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  let api = "https://fakestoreapi.com/products?limit=6";

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

  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="product">
        <div className="productHeading">
          <h1>Shop Items</h1>
          {loading && <ClipLoader />}
          <h2>{error}</h2>
        </div>

        <div className="ProductContents">
          <div className="productItem" key={product.id}>
            <img src={product.image} alt="" className="productImg" />
            <div className="productText">
              <h3>{product.category}</h3>
              <p>${product.price}</p>
            </div>

            <div className="productBtn">
              <button>Add to Cart</button>
              <button>Preview</button>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((products) => (
          <div className="product" key={products.slug}>
            <a href={`/product/${products.slug}`}>
              <img src={products.image} alt={products.name} />
            </a>
            <div className="product-info">
              <a href={`/product/${products.slug}`}>
                <p>{products.name}</p>
              </a>
              <p>{products.price}</p>
              <button> Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;

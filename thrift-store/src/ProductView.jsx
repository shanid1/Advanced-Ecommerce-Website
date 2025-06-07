import React, { useEffect, useState } from "react";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebase";

const ProductView = ({ product }) => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    if (product && product.sizes) {
      const cleaned = product.sizes.map((s) =>
        typeof s === "string" ? s.trim().toUpperCase().replace(/\s+/g, "") : s.size
      );
      setSizes(cleaned);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="productview">
      <h1>{product.name}</h1>

      <div className="productimg">
        <img src={product.images?.front} alt={`${product.name} front`} />
        <img src={product.images?.back} alt={`${product.name} back`} />
      </div>

      <hr />
      <p style={{color:"black"}}>{product.description}</p>
      <p>Gender: {product.gender}</p>
 <p>Available Sizes: {sizes.join(", ")}</p>
      <div className="productbtns">
       
        
      <h2>Price: ₹{product.price}</h2>
        <button
  className="button"
  onClick={async () => {
    try {
      // Firestore path: /products/{gender}/items/{product.id}
      const productRef = doc(db, "products", product.gender.toLowerCase(), "items", product.id);

      await updateDoc(productRef, {
        sold: increment(1)
      });

      // Open WhatsApp chat
      window.open("https://wa.me/9995875807", "_blank");
    } catch (err) {
      console.error("Failed to update sold count:", err);
      alert("Something went wrong while processing the purchase.");
    }
  }}
>
  Buy Now <span className="text">Buy??</span>
</button>

      </div>
    </div>
  );
};

export default ProductView;

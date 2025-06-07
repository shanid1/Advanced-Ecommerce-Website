import React from "react";

const ProductCard = ({ product, name, onDelete, showProduct }) => {
  function handleClick() {
    showProduct(product);
  }

  return (
    <div className="card" onClick={handleClick}>
      <div>
        <img
          src={product.images?.front}
          alt={`${product.name} front`}
        />
        <h1>{product.name}</h1>
        <hr />
        <h2>₹{product.price}</h2>
        {name && (
          <button
            className="dltbtn"
            onClick={(e) => {
              e.stopPropagation(); 
              onDelete();
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

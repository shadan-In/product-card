import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [animateCart, setAnimateCart] = useState(false);

  const handleIncrease = () => {
    if (quantity < 10) setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      setAnimateCart(true);
      setTimeout(() => setAnimateCart(false), 1000);
    }
  };

  return (
    <div className="grid md:grid-cols-2 bg-[#f5f5f5] rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      {/* Product Image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          alt="Wireless Headphones"
          className="w-full rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4 mt-6 md:mt-0 md:ml-6 text-[#333333]">
        <h2 className="text-2xl font-semibold">Wireless Headphones</h2>
        <p className="text-xl font-medium">$79.99</p>
        <div className="flex items-center space-x-1 text-[#f1c40f]">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>

        {/* Quantity Selector */}
        <div className="flex mt-6 items-center gap-4">
          <button
            aria-label="Decrease quantity"
            onClick={handleDecrease}
            className="bg-[#007bff] hover:bg-[#0056b3] text-white text-xl px-4 py-1 rounded"
          >
            -
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            aria-label="Increase quantity"
            onClick={handleIncrease}
            className="bg-[#007bff] hover:bg-[#0056b3] text-white text-xl px-3 py-1 rounded"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          aria-label="Add to cart"
          onClick={handleAddToCart}
          className="bg-[#007bff] hover:bg-[#0056b3] mt-6 text-white py-2 px-4 rounded w-full md:w-fit flex items-center justify-center gap-2 transition-all duration-300"
        >
          <i
            className={`fas fa-shopping-cart ${
              animateCart ? "animate-fly" : ""
            }`}
            aria-hidden="true"
          ></i>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

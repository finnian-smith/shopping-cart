/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">€{product.price}</p>
      <div className="product-quantity-section">
        <button className="decrement-button" onClick={decrementQuantity}>
          -
        </button>
        <input
          className="product-input"
          type="number"
          value={quantity}
          readOnly
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button className="increment-button" onClick={incrementQuantity}>
          +
        </button>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        <i className="fa-solid fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

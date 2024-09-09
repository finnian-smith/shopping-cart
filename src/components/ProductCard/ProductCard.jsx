/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
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
      <QuantitySelector
        quantity={quantity}
        increment={incrementQuantity}
        decrement={decrementQuantity}
      />
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        <i className="fa-solid fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

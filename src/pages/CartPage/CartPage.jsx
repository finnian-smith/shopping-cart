import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);

  if (cartItems.length == 0) {
    return (
      <div className="empty-cart">
        <i className="fa-solid fa-cart-shopping"></i>
        <p className="empty-cart-message">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;

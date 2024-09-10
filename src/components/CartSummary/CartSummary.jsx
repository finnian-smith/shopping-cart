/* eslint-disable react/prop-types */
import "./CartSummary.css";

const CartSummary = ({ cartItems }) => {
  const total = cartItems.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  const shipping = total > 100 ? 0 : 4.99;

  const grandTotal = total + shipping;

  return (
    <div className="cart-summary">
      <div className="subtotal-price">
        <p>Subtotal</p>
        <p className="price-value">€{total.toFixed(2)}</p>
      </div>
      <div className="shipping-price">
        <p>Shipping</p>
        <p className="price-value">€{shipping.toFixed(2)}</p>
      </div>
      <hr />
      <div className="grand-total-price">
        <p>Grand Total</p>
        <p className="price-value">€{grandTotal.toFixed(2)}</p>
      </div>
      <button className="checkout-button">Checkout Now</button>
    </div>
  );
};

export default CartSummary;

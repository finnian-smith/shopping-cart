/* eslint-disable react/prop-types */
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import "./CartItem.css";

const CartItem = ({
  item,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-item-left-section">
        <div className="item-image">
          <img src={item.image} alt={item.title} />
        </div>
      </div>
      <div className="cart-item-right-section">
        <div className="item-details">
          <div className="item-title">
            <p>{item.title}</p>
          </div>
          <div className="item-price">
            <p>€{item.price}</p>
          </div>
        </div>
        <div className="item-quantity">
          <QuantitySelector
            quantity={item.quantity}
            increment={() => incrementQuantity(item.id)}
            decrement={() => decrementQuantity(item.id)}
          />
          <button
            className="remove-item-button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

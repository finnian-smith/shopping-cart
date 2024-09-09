/* eslint-disable react/prop-types */
import "./QuantitySelector.css";

const QuantitySelector = ({ quantity, increment, decrement }) => {
  return (
    <div className="product-quantity-section">
      <button className="decrement-button" onClick={decrement}>
        -
      </button>
      <input
        className="product-input"
        type="number"
        value={quantity}
        readOnly
      />
      <button className="increment-button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;

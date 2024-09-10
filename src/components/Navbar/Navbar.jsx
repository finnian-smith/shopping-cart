import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          Cartify <i className="fa-solid fa-bag-shopping"></i>
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/shop" className="navbar-link" onClick={closeMenu}>
            Shop
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link" onClick={closeMenu}>
            <div className="navbar-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span
                className={`cart-count ${
                  totalItems > 0 ? "cart-not-empty" : "cart-empty"
                }`}
              >
                {totalItems}
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

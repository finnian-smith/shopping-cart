import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-image-container">
        <div className="hero-image-overlay"></div>
        <div className="hero-text-container">
          <div className="main-hero-text">
            <p>
              Simplify
              <br />
              Your
              <br />
              Shopping
            </p>
          </div>
          <div className="right-hero">
            <div className="sub-hero-text">
              <p>Discover a world of endless choices</p>
              <p>Fast, easy, and unforgettable shopping awaits</p>
            </div>
            <Link to="/shop" className="hero-button">
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

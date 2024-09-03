/* eslint-disable react/no-unescaped-entities */
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-image-container">
        <div className="hero-image-overlay"></div>
        <div className="hero-text-container">
          <div className="main-hero-text">
            <p>
              Expand
              <br />
              Your
              <br />
              Horizons
            </p>
          </div>
          <div className="right-hero">
            <div className="sub-hero-text">
              <p>Discover a world without borders</p>
              <p>
                Go ahead boldly - let's create unforgettable memories together
              </p>
            </div>
            <button className="hero-button">
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

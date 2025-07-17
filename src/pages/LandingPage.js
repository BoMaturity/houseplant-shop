import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Plant Paradise
          </h1>
          <p className="hero-subtitle">
            We bring nature to your home
          </p>
          <div className="company-description">
            <p>
              Plant Paradise is your premier destination for high-quality houseplants. 
              Founded in 2020, we specialize in bringing the beauty of nature into your living spaces. 
              Our carefully curated collection includes indoor plants, succulents, and air-purifying varieties 
              that not only enhance your home's aesthetic but also improve air quality and create a healthier environment. 
              With our expert care guidance and premium plant selection, we make it easy for everyone to enjoy 
              the benefits of living with plants.
            </p>
          </div>
          <div className="hero-buttons">
            <Link to='/products' className="btn btn-primary">
              Get Started
            </Link>
            <Link to='/products' className="btn btn-secondary">
              View Products
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://imgs.vietnamnet.vn/Images/2016/08/17/11/20160817112747-khu-vuon5.jpg?width=0&s=WmH4pVXYHd8fLpCZR_q0jg" 
            alt="Plant Paradise - Beautiful indoor garden paradise"
            className="hero-main-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Premium Quality Plants</h3>
              <p>We carefully select the healthiest plants from trusted nurseries</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>24-hour delivery with safe packaging</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>Care Support</h3>
              <p>Detailed care instructions for each plant type</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-image">
                <img 
                  src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=250&fit=crop" 
                  alt="Indoor plants"
                />
              </div>
              <h3>Indoor Plants</h3>
              <p>Purify air and create green spaces</p>
              <Link to='/products' className="category-link">Learn More →</Link>
            </div>
            <div className="category-card">
              <div className="category-image">
                <img 
                  src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=250&fit=crop" 
                  alt="Succulents"
                />
              </div>
              <h3>Succulents</h3>
              <p>Easy to care for, perfect for beginners</p>
              <Link to='/products' className="category-link">Learn More →</Link>
            </div>
            <div className="category-card">
              <div className="category-image">
                <img 
                  src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=400&h=250&fit=crop" 
                  alt="Air purifying plants"
                />
              </div>
              <h3>Air Purifying</h3>
              <p>Clean the air, good for health</p>
              <Link to='/products' className="category-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Plant Paradise</h3>
              <p>Bringing nature to your home since 2020</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: info@plantparadise.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Plant Paradise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
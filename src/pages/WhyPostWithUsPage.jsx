import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero image.png';
import './WhyPostWithUsPage.css';

const WhyPostWithUsPage = () => {
  return (
    <div className="why-post-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Making it super easy
                <br />
                to find contractors
              </h1>
              <p className="hero-description">
                Contract King is a little place on the internet that helps
                <br />
                companies find contractors for their teams.
              </p>
              <Link to="/employer/contracts/create" className="hero-cta-button">
                Post a contract
              </Link>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Contract King Dashboard" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPostWithUsPage;

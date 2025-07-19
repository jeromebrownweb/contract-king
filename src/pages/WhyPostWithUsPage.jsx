import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero_pic.png';
import progressImage from '../assets/progress.png';
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

      {/* Process Steps Section */}
      <section className="process-section">
        <div className="process-container">
          <div className="process-header">
            <h2 className="process-title">What makes it easy?</h2>
            <p className="process-description">
              We try to keep the UI straight to the point, taking out all the fluff
            </p>
          </div>
          
          <div className="process-visual">
            <img src={progressImage} alt="Simple 3-step process: Create Contract, Preview, Pay & Post" className="progress-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPostWithUsPage;

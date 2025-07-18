import React from 'react';
import { Link } from 'react-router-dom';
import iconLarge from '../assets/icon_large.svg';
import '../index.css';

const ContractSuccessPage = () => {
  return (
    <div className="main-content">
      <div className="success-page-container">
        <div className="success-card">
          <div className="success-icon">
            <img src={iconLarge} alt="Contract King" />
          </div>
          <h1 className="success-title">Your contract has been posted!</h1>
          <p className="success-message">
            Thank you for using Contract King, your post will now appear on the 
            homepage and then continue to be visible for 30days
          </p>
          <Link to="/employer/contracts" className="white-btn success-btn">
            View your contract
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContractSuccessPage;

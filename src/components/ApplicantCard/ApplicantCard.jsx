import React from 'react';
import './ApplicantCard.css';

// Props: name, email, phone, cvViewed (bool), onViewCV (function)
const ApplicantCard = ({ name, email, phone, cvViewed, onViewCV }) => {
  return (
    <div className="contract-card applicant-card">
      <div className="applicant-card-header-row">
        <h2 className="applicant-name">{name}</h2>
      </div>
      <div className="applicant-contact-info">
        <div>Email - {email}</div>
        <div>Phone - {phone}</div>
      </div>
      <div className="applicant-card-actions">
        {cvViewed && (
          <span className="cv-viewed-badge">CV viewed</span>
        )}
        <button className="outline-btn" onClick={onViewCV}>View CV</button>
      </div>
    </div>
  );
};

export default ApplicantCard;

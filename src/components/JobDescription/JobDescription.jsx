import React from 'react';
import './JobDescription.css';

const JobDescription = ({ 
  title = 'Senior Web Designer', 
  description = 'No description provided.',
  company = 'Microsoft',
  contractLength = '6 Months',
  contractType = 'Outside IR35',
  location = 'London'
}) => {
  return (
    <div className="job-description-card">
      <h1>{title}</h1>
      <div className="job-meta">{title} • {contractLength} • {contractType} • {location} • {company}</div>
      <h2>Job Description</h2>
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {description}
      </div>
    </div>
  );
};

export default JobDescription; 
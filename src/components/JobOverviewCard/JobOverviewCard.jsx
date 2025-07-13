import React from 'react';
import './JobOverviewCard.css';

const JobOverviewCard = ({ 
  title = 'Senior Web Designer',
  company = 'Microsoft', 
  location = 'Remote', 
  dayRate = '£400', 
  contractType = 'Outside IR35', 
  contractLength = '6 Months',
  showApplyButton = true 
}) => {
  return (
    <div className="job-overview-card">
      <h3>Contract Overview</h3>
      <ul className="overview-list">
        <li><span>Location</span> - {location}</li>
        <li><span>Company</span> - {company}</li>
        <li><span>Day Rate</span> - {dayRate}</li>
        <li><span>Type</span> - {contractType}</li>
        <li><span>Length</span> - {contractLength}</li>
        <li><span>Hours</span> - Full time</li>
      </ul>
      {showApplyButton && (
        <button className="apply-contract-btn">Apply for this contract</button>
      )}
    </div>
  );
};

export default JobOverviewCard; 
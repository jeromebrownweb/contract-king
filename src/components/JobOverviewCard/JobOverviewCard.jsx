import React from 'react';
import './JobOverviewCard.css';

const JobOverviewCard = () => {
  return (
    <div className="job-overview-card">
      <h3>Contract Overview</h3>
      <ul className="overview-list">
        <li><span>Location</span> - Remote</li>
        <li><span>Day Rate</span> - £400</li>
        <li><span>Type</span> - Outside IR35</li>
        <li><span>Length</span> - 6 Months</li>
        <li><span>Hours</span> - Full time</li>
      </ul>
      <button className="apply-contract-btn">Apply for this contract</button>
    </div>
  );
};

export default JobOverviewCard; 
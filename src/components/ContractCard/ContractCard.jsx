import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import './ContractCard.css';

const ContractCard = ({
  title = 'Senior Web Designer',
  company = 'Spotify',
  contractType = 'Outside IR35',
  postedDate = '10/12/2024',
  daysAgo = 6,
  applicants = 10,
}) => {
  return (
    <div className="contract-card">
      <div className="contract-card-header">
        <h2 className="contract-title">{title}</h2>
        <button className="delete-btn" aria-label="Delete contract">
          <FiTrash2 size={20} />
        </button>
      </div>
      <div className="contract-company">Company - {company}</div>
      <div className="contract-type">Contract Type - {contractType}</div>
      <div className="contract-posted">Posted - {postedDate} | {daysAgo} days ago</div>
      <div className="contract-applicants">
        <span className="applicants-label">Applicants - </span>
        <span className="applicants-count">{applicants}</span>
      </div>
      <a href="#" className="close-job-link">Close job post</a>
      <div className="contract-card-actions">
        <button className="dark-btn">Edit posting</button>
        <button className="white-btn">View Applicants</button>
      </div>
    </div>
  );
};

export default ContractCard; 
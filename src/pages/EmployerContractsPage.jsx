import React, { useState } from 'react';
import '../index.css';
import ContractCard from '../components/ContractCard/ContractCard';

const liveContracts = [
  {
    id: 1,
    title: 'Senior Web Designer',
    company: 'Spotify',
    contractType: 'Outside IR35',
    postedDate: '10/12/2024',
    daysAgo: 6,
    applicants: 10,
  },
  // ...add more live contracts as needed
];

const closedContracts = [
  {
    id: 1,
    title: 'Senior Web Designer',
    company: 'Spotify',
    contractType: 'Outside IR35',
    postedDate: '10/12/2024',
    closedDate: '12/02/2025',
    applicants: 10,
  },
  // ...add more closed contracts as needed
];

const EmployerContractsPage = () => {
  const [activeTab, setActiveTab] = useState('live');

  return (
    <div className="main-content">
      <div className="employer-contracts-container">
        <h1 className="employer-contracts-title">Your Contract Postings</h1>
        <div className="employer-contracts-tabs">
          <button
            className={`contracts-tab${activeTab === 'live' ? ' active' : ''}`}
            onClick={() => setActiveTab('live')}
          >
            Live Contracts
          </button>
          <button
            className={`contracts-tab${activeTab === 'closed' ? ' active' : ''}`}
            onClick={() => setActiveTab('closed')}
          >
            Closed Contracts
          </button>
        </div>
        <div>
          {activeTab === 'live' && liveContracts.map(contract => (
            <ContractCard
              key={contract.id}
              {...contract}
              showTrash={true}
              showCloseLink={true}
              showClosedDate={false}
              primaryButtonText="Edit posting"
              secondaryButtonText="View Applicants"
            />
          ))}
          {activeTab === 'closed' && closedContracts.map(contract => (
            <ContractCard
              key={contract.id}
              {...contract}
              showTrash={false}
              showCloseLink={false}
              showClosedDate={true}
              primaryButtonText="View description"
              secondaryButtonText="Repost contract"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployerContractsPage; 
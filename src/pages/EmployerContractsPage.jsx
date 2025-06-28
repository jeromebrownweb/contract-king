import React from 'react';
import '../index.css';
import ContractCard from '../components/ContractCard/ContractCard';

const EmployerContractsPage = () => {
  return (
    <div className="main-content">
      <div className="employer-contracts-container">
        <h1 className="employer-contracts-title">Your Contract Postings</h1>
        <div className="employer-contracts-tabs">
          <button className="contracts-tab active">Live Contracts</button>
          <button className="contracts-tab">Closed Contracts</button>
        </div>
        {/* Render 5 placeholder contract cards */}
        <ContractCard />
        <ContractCard />
        <ContractCard />
        <ContractCard />
        <ContractCard />
      </div>
    </div>
  );
};

export default EmployerContractsPage; 
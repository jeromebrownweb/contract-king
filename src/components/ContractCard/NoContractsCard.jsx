import React from 'react';
import logo from '../../assets/contract_king_logo_dark.svg';
import './ContractCard.css';

const NoContractsCard = ({ onPostContract }) => (
  <div className="contract-card no-contracts-card">
    <div className="no-contracts-logo">
      <img src={logo} alt="Contract King logo" width={56} height={56} />
    </div>
    <div className="no-contracts-message">You have not posted any contracts yet</div>
    <button className="white-btn" onClick={onPostContract}>Post a contract</button>
  </div>
);

export default NoContractsCard; 
import React from 'react';
import './ProgressSteps.css';

const ProgressSteps = ({ steps, currentStep = 0 }) => {
  // Calculate progress percentage based on current step
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="progress-steps">
      <h1 className="progress-title">Post a contract</h1>
      <div className="progress-bar">
        <div className="progress-steps-labels">
          {steps.map((step, index) => (
            <div 
              key={step} 
              className={`progress-step ${index <= currentStep ? 'active' : ''}`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;

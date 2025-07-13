import React, { useState } from 'react';
import ProgressSteps from '../components/ProgressSteps/ProgressSteps';
import JobOverviewCard from '../components/JobOverviewCard/JobOverviewCard';
import JobDescription from '../components/JobDescription/JobDescription';
import '../index.css';

const contractLengths = [
  '3 Months',
  '6 Months',
  '12 Months',
  'Other',
];

const contractTypes = [
  'Outside IR35',
  'Inside IR35',
  'Fixed term contract',
  'Freelance Agreement',
];

const CreateContractPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    dayRate: '',
    contractLength: contractLengths[0],
    customUrl: '',
    contractType: contractTypes[0],
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentStep(1);
  };

  const handleBack = () => {
    setCurrentStep(0);
  };

  const handleFinalSubmit = () => {
    alert('Moving to Payment step! (UI only)');
  };

  // Render Create Contract Step
  const renderCreateStep = () => (
    <div className="main-content" style={{ paddingTop: 0 }}>
      <div className="contract-form-container">
        <form className="contract-form-card" onSubmit={handleNext}>
          <h3 className="contract-form-section-title">Contract Details</h3>
          <label>
            Role title
            <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Senior Web Designer" />
          </label>
          <label>
            Company Name
            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Microsoft" />
          </label>
          <label>
            Location
            <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="London" />
          </label>
          <label>
            Day Rate
            <input type="text" name="dayRate" value={form.dayRate} onChange={handleChange} placeholder="£400" />
          </label>
          <label>
            Contract Length
            <select name="contractLength" value={form.contractLength} onChange={handleChange}>
              {contractLengths.map((len) => (
                <option key={len} value={len}>{len}</option>
              ))}
            </select>
          </label>
          <label>
            Custom URL
            <input type="text" name="customUrl" value={form.customUrl} onChange={handleChange} placeholder="" />
            <span className="contract-form-note">Note - If you use your own URL, you can't see how many people have applied in the Contract King dashboard</span>
          </label>
          <div className="contract-form-radio-group">
            <span className="contract-form-radio-label">Contract Type</span>
            <div className="contract-type-radio-list">
              {contractTypes.map((type) => (
                <label key={type} className="custom-radio">
                  <input
                    type="radio"
                    name="contractType"
                    value={type}
                    checked={form.contractType === type}
                    onChange={handleChange}
                  />
                  <span className="custom-radio-outer">
                    <span className="custom-radio-inner" />
                  </span>
                  <span className="custom-radio-label-text">{type}</span>
                </label>
              ))}
            </div>
          </div>
          <label>
            Role Description
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={8}
              placeholder="Paste your job spec here..."
            />
          </label>
        </form>
        <div className="contract-form-actions" style={{ marginTop: '24px' }}>
          <button type="button" className="outline-btn">Cancel</button>
          <button type="submit" className="white-btn" onClick={handleNext}>Next Step</button>
        </div>
      </div>
    </div>
  );

  // Render Preview Step
  const renderPreviewStep = () => (
    <div className="job-details-outer-container">
      <div className="job-details-inner-container">
        <aside className="job-details-sidebar">
          <JobOverviewCard 
            title={form.title || 'Untitled Role'}
            company={form.company || 'Company Name'}
            location={form.location || 'Location'}
            dayRate={form.dayRate || '£0'}
            contractLength={form.contractLength}
            contractType={form.contractType}
            showApplyButton={false}
          />
        </aside>
        <main className="job-details-main-content">
          <JobDescription 
            title={form.title || 'Untitled Role'}
            description={form.description || 'No description provided.'}
            company={form.company || 'Company Name'}
            contractLength={form.contractLength}
            contractType={form.contractType}
            location={form.location || 'Location'}
          />
          <div className="contract-form-actions" style={{ marginTop: '24px' }}>
            <button type="button" className="outline-btn" onClick={handleBack}>Back</button>
            <button type="button" className="white-btn" onClick={handleFinalSubmit}>Next</button>
          </div>
        </main>
      </div>
    </div>
  );
  return (
    <>
      <ProgressSteps 
        steps={['Create Contract', 'Preview', 'Pay & Post']} 
        currentStep={currentStep} 
      />
      {currentStep === 0 && renderCreateStep()}
      {currentStep === 1 && renderPreviewStep()}
    </>
  );

};

export default CreateContractPage; 
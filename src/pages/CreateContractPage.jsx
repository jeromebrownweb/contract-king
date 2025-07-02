import React, { useState } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contract saved! (UI only)');
  };

  return (
    <div className="main-content">
      <div className="contract-form-container">
        <h1 className="employer-contracts-title">Edit Job Posting</h1>
        <form className="contract-form-card" onSubmit={handleSubmit}>
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
          <div className="contract-form-actions">
            <button type="button" className="outline-btn">Cancel</button>
            <button type="submit" className="white-btn">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContractPage; 
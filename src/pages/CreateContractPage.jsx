import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressSteps from '../components/ProgressSteps/ProgressSteps';
import JobOverviewCard from '../components/JobOverviewCard/JobOverviewCard';
import JobDescription from '../components/JobDescription/JobDescription';
import debug, { errorHandler } from '../utils/debug';
import { validateJobForm, validatePaymentForm, createValidationError } from '../utils/validation';
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
  const navigate = useNavigate();
  
  // Feature flag for multiple packages
  const SHOW_MULTIPLE_PACKAGES = false;
  
  // Single package configuration
  const SINGLE_PACKAGE_CONFIG = {
    name: 'Standard Job Post',
    price: 99.99,
    description: 'One time payment',
    features: [
      'Job is posted to the site for 30 days',
      '2x Social Media Posts',
      'Post highlighted and marked as new for one week'
    ]
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [isProcessing, setIsProcessing] = useState(false);
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
  const [paymentForm, setPaymentForm] = useState({
    nameOnCard: '',
    cardNumber: '',
    expiryDate: '',
    ccv: '',
    autoRenew: false
  });

  const packages = {
    standard: {
      name: 'Standard Post',
      price: 299,
      features: [
        'Job is posted to the site for 30 days',
        '2x Social Media Posts'
      ]
    },
    upgraded: {
      name: 'Upgraded Post', 
      price: 349,
      features: [
        'Job is posted to the site for 30 days',
        '3x Social Media Posts',
        'Highlight Ad',
        'Pin to homepage'
      ]
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentForm((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    debug.log('CreateContract', 'Moving to next step', { currentStep, form });
    
    // Validate current step before proceeding
    if (currentStep === 0) {
      const { isValid, errors } = validateJobForm(form);
      debug.log('CreateContract', 'Validation result', { isValid, errors, form });
      
      if (!isValid) {
        debug.warn('CreateContract', 'Job form validation failed', errors);
        // Show validation errors in development
        if (process.env.NODE_ENV === 'development') {
          console.table(errors);
          alert(`Validation failed:\n${Object.entries(errors).map(([field, error]) => `${field}: ${error}`).join('\n')}`);
        }
        return;
      }
    }
    
    setCurrentStep(1);
    debug.success('CreateContract', `Advanced to step 1`);
  };

  const handleBack = () => {
    debug.log('CreateContract', 'Moving to previous step', { currentStep });
    setCurrentStep(currentStep - 1);
  };

  const handlePreviewNext = () => {
    debug.log('CreateContract', 'Moving from preview to payment');
    setCurrentStep(2);
  };

  const handlePayment = async () => {
    debug.log('Payment', 'Starting payment process', { selectedPackage, paymentForm });
    
    try {
      setIsProcessing(true);
      
      // Validate payment form - temporarily skip validation for demo
      debug.log('Payment', 'Skipping validation for demo, processing payment...');
      
      // Mock payment processing - simulate API call
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      debug.success('Payment', 'Payment processed successfully');
      
      setIsProcessing(false);
      
      // Navigate to success page
      navigate('/contract/success');
      
    } catch (error) {
      setIsProcessing(false);
      errorHandler.handleError(error, 'Payment Process');
      
      // In a real app, you might show an error message to the user
      if (error.type === 'ValidationError') {
        debug.warn('Payment', 'Validation error:', error.message);
      }
    }
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
            <button type="button" className="white-btn" onClick={handlePreviewNext}>Next</button>
          </div>
        </main>
      </div>
    </div>
  );

  // Render Payment Step
  const renderPaymentStep = () => {
    // Get package data based on feature flag
    const currentPackage = SHOW_MULTIPLE_PACKAGES 
      ? packages[selectedPackage] 
      : SINGLE_PACKAGE_CONFIG;

    return (
      <div className="main-content" style={{ paddingTop: 0 }}>
        <div className="payment-container">
          {/* Package Selection */}
          <div className="package-selection">
            {SHOW_MULTIPLE_PACKAGES ? (
              // Multiple packages view
              <div className="package-grid">
                {Object.entries(packages).map(([key, pkg]) => (
                  <div 
                    key={key}
                    className={`package-card ${selectedPackage === key ? 'selected' : ''}`}
                  >
                    <label className="package-radio-label">
                      <input
                        type="radio"
                        name="package"
                        value={key}
                        checked={selectedPackage === key}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="package-radio-input"
                      />
                      <div className="package-content">
                        <h3 className="package-name">{pkg.name}</h3>
                        <div className="package-price">£{pkg.price}</div>
                        <ul className="package-features">
                          {pkg.features.map((feature, index) => (
                            <li key={index}>
                              <span className="feature-checkmark">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="package-radio-indicator">
                          <span className={`radio-button ${selectedPackage === key ? 'selected' : ''}`}>
                            {selectedPackage === key && <span className="radio-dot"></span>}
                          </span>
                          Selected Package
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              // Single package view
              <div className="single-package-container">
                <div className="single-package-card">
                  <div className="package-content">
                    <h3 className="package-name">{SINGLE_PACKAGE_CONFIG.name} - {SINGLE_PACKAGE_CONFIG.description}</h3>
                    <div className="package-price">£{SINGLE_PACKAGE_CONFIG.price}</div>
                    <ul className="package-features">
                      {SINGLE_PACKAGE_CONFIG.features.map((feature, index) => (
                        <li key={index}>
                          <span className="feature-checkmark">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Payment Form */}
          <div className="payment-form-section">
            <h3 className="payment-section-title">Payment</h3>
            
            {/* Order Summary */}
            <div className="order-summary">
              <h4>Order Summary:</h4>
              <div className="summary-line">
                <span>Contract King Standard Job Post</span>
              </div>
              <div className="summary-total">
                <strong>Total - £{currentPackage.price}</strong>
              </div>
            </div>

          {/* Payment Form */}
          <form className="payment-form" onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
            <div className="form-row">
              <label>
                Name on card
                <input 
                  type="text" 
                  name="nameOnCard"
                  value={paymentForm.nameOnCard}
                  onChange={handlePaymentChange}
                  placeholder="John Smith"
                  required
                />
              </label>
            </div>
            
            <div className="form-row">
              <label>
                Card number
                <input 
                  type="text" 
                  name="cardNumber"
                  value={paymentForm.cardNumber}
                  onChange={handlePaymentChange}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </label>
            </div>
            
            <div className="form-row-split">
              <label>
                Expiry Date
                <input 
                  type="text" 
                  name="expiryDate"
                  value={paymentForm.expiryDate}
                  onChange={handlePaymentChange}
                  placeholder="MM/YY"
                  required
                />
              </label>
              <label>
                CCV
                <input 
                  type="text" 
                  name="ccv"
                  value={paymentForm.ccv}
                  onChange={handlePaymentChange}
                  placeholder="123"
                  required
                />
              </label>
            </div>

            <div className="form-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="autoRenew"
                  checked={paymentForm.autoRenew}
                  onChange={handlePaymentChange}
                  className="checkbox-input"
                />
                <span className="checkbox-custom">
                  {paymentForm.autoRenew && <span className="checkbox-checkmark">✓</span>}
                </span>
                Auto Renew
              </label>
            </div>
          </form>
        </div>

        {/* Navigation */}
        <div className="contract-form-actions" style={{ marginTop: '32px' }}>
          <button type="button" className="outline-btn" onClick={handleBack} disabled={isProcessing}>
            Back
          </button>
          <button 
            type="button" 
            className="white-btn" 
            onClick={handlePayment}
            disabled={isProcessing || !paymentForm.nameOnCard || !paymentForm.cardNumber}
          >
            {isProcessing ? 'Processing...' : 'Next'}
          </button>
        </div>
      </div>
    </div>
    );
  };

  return (
    <>
      <ProgressSteps 
        steps={['Create Contract', 'Preview', 'Pay & Post']} 
        currentStep={currentStep} 
      />
      {currentStep === 0 && renderCreateStep()}
      {currentStep === 1 && renderPreviewStep()}
      {currentStep === 2 && renderPaymentStep()}
    </>
  );

};

export default CreateContractPage;
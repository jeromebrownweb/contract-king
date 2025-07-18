import React, { useRef, useState } from 'react';
import debug from '../../utils/debug';
import './ApplyForm.css';

const ApplyForm = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveFile = () => {
    setFile(null);
    fileInputRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debug.log('ApplyForm', 'Application submitted (UI only)');
    debug.success('ApplyForm', 'Application form submitted successfully');
  };

  return (
    <form className="apply-form-card" onSubmit={handleSubmit}>
      <h3>Apply</h3>
      <label>
        First Name
        <input type="text" placeholder="First Name" defaultValue="Jerome" />
      </label>
      <label>
        Last Name
        <input type="text" placeholder="Last Name" defaultValue="Brown" />
      </label>
      <label>
        Email
        <input type="email" placeholder="Email" defaultValue="Brown" />
      </label>
      <label>
        mobile Phone
        <input type="tel" placeholder="Mobile Phone" defaultValue="Brown" />
      </label>
      <label className="cv-label">
        CV
        <div
          className="cv-drop-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => fileInputRef.current.click()}
        >
          {file ? (
            <div className="cv-file-info">
              <span>{file.name}</span>
              <button type="button" onClick={handleRemoveFile} className="remove-cv-btn">Remove</button>
            </div>
          ) : (
            <span>Drag & Drop File or <span className="cv-browse">Browse Files</span></span>
          )}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </label>
      <button className="white-btn full-width-btn" type="submit">Submit Application</button>
    </form>
  );
};

export default ApplyForm; 
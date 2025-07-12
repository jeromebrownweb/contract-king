import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicantCard from '../components/ApplicantCard/ApplicantCard';
import '../index.css';

const applicants = [
  { name: 'James Smith', email: 'useremail@gmail.com', phone: '0123456789', cvViewed: true },
  { name: 'Linda Carter', email: 'useremail@gmail.com', phone: '0123456789', cvViewed: false },
  { name: 'Gareth Johnson', email: 'useremail@gmail.com', phone: '0123456789', cvViewed: false },
  { name: 'James Smith', email: 'james_nintendo@gmail.com', phone: '0771712934', cvViewed: false },
  { name: 'Linda Carter', email: 'Linda_flowers@gmail.com', phone: '0771712934', cvViewed: false },
  { name: 'Gareth Johnson', email: 'Superg1234@hotmail.com', phone: '0771212934', cvViewed: false },
];

const ViewApplicantsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <div className="employer-contracts-container">
        <button
          className="outline-btn back-arrow-btn"
          style={{ marginBottom: 24, marginRight: 16 }}
          onClick={() => navigate(-1)}
        >
          &#8592;
        </button>
        <h1 className="employer-contracts-title" style={{ marginBottom: 32 }}>
          Senior Web Designer at Spotify | {applicants.length} Applicants
        </h1>
        {applicants.map((app, idx) => (
          <ApplicantCard
            key={idx}
            name={app.name}
            email={app.email}
            phone={app.phone}
            cvViewed={app.cvViewed}
            onViewCV={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewApplicantsPage;

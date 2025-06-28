import React from 'react';
import './JobDetailsPage.css';
import JobOverviewCard from '../components/JobOverviewCard/JobOverviewCard';
import JobDescription from '../components/JobDescription/JobDescription';
import ApplyForm from '../components/ApplyForm/ApplyForm';

const JobDetailsPage = () => {
  return (
    <div className="job-details-outer-container">
      <div className="job-details-inner-container">
        <aside className="job-details-sidebar">
          <JobOverviewCard />
        </aside>
        <main className="job-details-main-content">
          <JobDescription />
          <ApplyForm />
        </main>
      </div>
    </div>
  );
};

export default JobDetailsPage;

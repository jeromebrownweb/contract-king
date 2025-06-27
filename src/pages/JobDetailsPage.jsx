import React from 'react';
import './JobDetailsPage.css';

const JobDetailsPage = () => {
  return (
    <div className="job-details-container">
      <div className="job-details-sidebar">
        {/* Contract Overview Component will go here */}
        <h3>Contract Overview</h3>
        <p>Location - Remote</p>
        <p>Day Rate - £400</p>
        <p>Type - Outside IR35</p>
        <p>Length - 6 Months</p>
        <p>Hours - Full time</p>
        <hr />
        <button className="apply-button">Apply for this contract</button>
      </div>
      <div className="job-details-content">
        {/* Job Description Component will go here */}
        <h2>Senior Web Designer</h2>
        <h4>SC Cleared Azure Data Engineer - 6 Months - Outside IR35 - London - Hybrid</h4>
        <h3>Job Description</h3>
        <p>We are committed to leveraging cutting-edge technology and innovation to drive meaningful impact in our industry. As part of our growth, we are seeking a highly skilled Senior Data Engineer with extensive experience in Azure Cloud technologies to join our dynamic team.</p>
        <p>Role Overview: As a Senior Data Engineer specializing in Azure Cloud technologies, you will be responsible for designing, developing, and maintaining data engineering solutions to support our organization's data needs. You will work closely with the architecture team and business stakeholders to understand requirements and create detailed low-level designs. This role requires strong technical expertise in Azure Cloud services, particularly Azure Data Factory, Databricks, Azure Data Lake Services, and Azure Synapse Analytics.</p>
        <h3>Key Responsibilities:</h3>
        <ul>
          <li>Utilize your 8+ years of experience in Data Engineering to design and implement robust data pipelines, ensuring data quality, reliability, and scalability.</li>
          <li>Collaborate with the architecture team and business stakeholders to define and execute detailed low-level designs.</li>
          <li>Develop and maintain ingestion pipelines, data models, and documentation.</li>
          <li>Hands-on experience with various Azure services, including but not limited to Azure Data Factory, Azure Data Lake Services, Azure Synapse Analytics, Azure API Management, Azure Functions, and Azure Web Applications.</li>
          <li>Create and manage resource groups, ensuring efficient resource allocation and utilization.</li>
          <li>Lead a development team of 7-10 members, providing technical guidance and mentorship.</li>
          <li>Implement Azure CI/CD pipelines to automate deployment and testing processes.</li>
          <li>Ensure adherence to SDLC processes and best practices throughout the development lifecycle.</li>
          <li>Demonstrate excellent verbal, written, and communication skills, with strong analytical and troubleshooting abilities.</li>
        </ul>
        <h3>Requirements:</h3>
        <ul>
          <li>Bachelor's degree in Computer Science, Engineering, or related field.</li>
          <li>Minimum of 8 years of experience in Data Engineering, with a focus on Azure Cloud technologies and Databricks.</li>
          <li>Proficiency in Azure services such as Azure Data Factory, Azure Data Lake Services, Azure Synapse Analytics, Azure API Management, Azure Functions, and Azure Web Applications.</li>
          <li>Strong expertise in designing and implementing data ingestion pipelines, data models, and documentation.</li>
          <li>Experience working in an Agile environment and leading development teams.</li>
          <li>Excellent communication and interpersonal skills, with the ability to collaborate effectively with cross-functional teams.</li>
          <li>Proven track record of delivering high-quality solutions within established timelines.</li>
        </ul>

        {/* Apply Form Component will go here */}
        <h3>Apply</h3>
        <form className="apply-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="mobilePhone">Mobile Phone</label>
            <input type="tel" id="mobilePhone" name="mobilePhone" />
          </div>
          <div className="form-group">
            <label htmlFor="cv">CV</label>
            <div className="cv-upload-box">
              Drag & Drop File or <a href="#">Browse Files</a>
            </div>
          </div>
        </form>
        <button className="see-more-jobs-button">See more jobs</button>
      </div>
    </div>
  );
};

export default JobDetailsPage;

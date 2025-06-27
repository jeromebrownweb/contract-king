import { Link } from 'react-router-dom';
import './JobCard.css';

function JobCard() {
  return (
    <Link to="/jobs/1" className="job-card-link">
      <div className="job-card">
        <div className="posted-time">1 day ago</div>
        <h2 className="job-title">Senior Web Designer</h2>
        <div className="company">Company: Microsoft</div>
        <div className="tags">
          <span className="tag">Location - Remote</span>
          <span className="tag">Salary - 100k</span>
          <span className="tag">Full-Time</span>
          <span className="tag">Outside IR35</span>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;

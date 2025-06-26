import './JobCard.css';

function JobCard() {
  return (
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
  );
}

export default JobCard;

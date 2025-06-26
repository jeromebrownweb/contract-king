import './FilterSidebar.css';

function FilterSidebar() {
  return (
    <aside className="filter-sidebar">
      <div className="filter-group">
        <div className="filter-title">Contract Length</div>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">3 months</span>
          <span className="option-count">11</span>
        </label>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">6 months</span>
          <span className="option-count">11</span>
        </label>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">12 months</span>
          <span className="option-count">11</span>
        </label>
      </div>
      <div className="filter-group">
        <div className="filter-title">Location Type</div>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">Remote</span>
          <span className="option-count">11</span>
        </label>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">Hybrid</span>
          <span className="option-count">11</span>
        </label>
      </div>
      <div className="filter-group">
        <div className="filter-title">Job Sector</div>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">Front End Dev</span>
          <span className="option-count">11</span>
        </label>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">Back End Dev</span>
          <span className="option-count">11</span>
        </label>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">Designer</span>
          <span className="option-count">11</span>
        </label>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">User Researcher</span>
          <span className="option-count">11</span>
        </label>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">Product Manager</span>
          <span className="option-count">11</span>
        </label>
        <label className="filter-option">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          <span className="option-text">QA Tester</span>
          <span className="option-count">11</span>
        </label>
      </div>
    </aside>
  );
}

export default FilterSidebar;

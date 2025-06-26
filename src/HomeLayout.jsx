import { useState } from 'react';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import JobCard from './components/JobCard/JobCard';
import { FaFilter } from 'react-icons/fa';
import './HomeLayout.css';

function HomeLayout({ children }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className={`main-content ${isFilterOpen ? 'filter-open' : ''}`}>
      <div className="layout-container">
        <button
          className="filter-toggle-button"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <FaFilter />
          {isFilterOpen ? 'Close Filters' : 'Filter'}
        </button>

        <FilterSidebar />
        <main className="job-list-area">
          <JobCard />
          <JobCard />
          <JobCard />
          {/* Added 3 cards for testing */}
        </main>
      </div>
    </div>
  );
}

export default HomeLayout;

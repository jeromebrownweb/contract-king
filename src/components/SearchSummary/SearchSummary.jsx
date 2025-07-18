import React from 'react';
import debug from '../../utils/debug';
import './SearchSummary.css';

const SearchSummary = ({ searchTerm = "Web Designer", resultCount = 12 }) => {
  const handleClearSearch = () => {
    // Placeholder function - will be connected to backend logic later
    debug.log('SearchSummary', 'Clear search clicked');
  };

  return (
    <div className="search-summary">
      <div className="search-summary-content">
        <span className="search-results-text">
          {resultCount} Search results found for: '{searchTerm}'
        </span>
        <button 
          className="clear-search-btn"
          onClick={handleClearSearch}
        >
          Clear Search
        </button>
      </div>
    </div>
  );
};

export default SearchSummary; 
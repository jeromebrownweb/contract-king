import './SearchBar.css';

function SearchBar() {
  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Enter a job title"
        className="search-input"
      />
      <button type="submit" className="search-btn">
        Find my contract
      </button>
    </form>
  );
}

export default SearchBar;

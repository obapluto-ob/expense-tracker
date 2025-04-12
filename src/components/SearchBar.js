import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search expenses..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search-btn">Search</button> {/* Ensure button is here */}
    </div>
  );
};

export default SearchBar;
// src/components/SearchBar.jsx

import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search widgets..."
      value={searchTerm}
      onChange={onSearchChange}
      className="search-bar"
    />
  );
};

export default SearchBar;

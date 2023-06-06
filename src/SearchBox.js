import React from 'react'

const SearchBox = ({ SearchChange }) => {
  return (
    <div style={{ padding: "2px" }}>
      <input
        placeholder="search"
        type="text"
        className="SearchBox"
        onChange={SearchChange}
      />
    </div>
  );
};

export default SearchBox
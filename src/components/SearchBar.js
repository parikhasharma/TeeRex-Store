import React, { useEffect, useState } from 'react';
import './SearchBar.css';

function SearchBar({ searchInput, setSearchInput,products ,setProducts, customData }) {
  
  useEffect(() => {
    let searchedProducts;
    if (searchInput !== '') {
      searchedProducts = customData.filter((product) => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    } else {
      searchedProducts = customData;
    }
    setProducts(searchedProducts);
  }, [searchInput, setProducts]);

  return (
    <div className="searchDiv">
      <input
        className="search-input"
        type="text"
        placeholder="Search for products..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="searchIconDiv">
        <span className="search-icon">🔍</span>
      </div>
    </div>
  );
}

export default SearchBar;

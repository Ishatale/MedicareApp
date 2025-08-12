import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = ({ 
  placeholder = "Search doctors, hospitals, specializations...", 
  onSearch, 
  className = "" 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <form className={`${styles.searchBar} ${className}`} onSubmit={handleSubmit}>
      <div className={styles.searchContainer}>
        <i className={`fas fa-search ${styles.searchIcon}`}></i>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
        />
        {query && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={() => {
              setQuery('');
              if (onSearch) onSearch('');
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
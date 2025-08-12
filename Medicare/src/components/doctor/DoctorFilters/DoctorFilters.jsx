import React from 'react';
import styles from './DoctorFilters.module.scss';

const DoctorFilters = ({ 
  filters, 
  onFilterChange, 
  doctors = [],
  onSortChange,
  sortBy = 'name'
}) => {
  // Get unique values for filter options
  const specializations = [...new Set(doctors.map(doctor => doctor.specialization))];
  const hospitals = [...new Set(doctors.map(doctor => doctor.hospital))];
  const locations = [...new Set(doctors.map(doctor => doctor.location))];

  const handleFilterChange = (filterType, value) => {
    if (onFilterChange) {
      onFilterChange({
        ...filters,
        [filterType]: value
      });
    }
  };

  const handleSortChange = (value) => {
    if (onSortChange) {
      onSortChange(value);
    }
  };

  const clearFilters = () => {
    if (onFilterChange) {
      onFilterChange({
        specialization: 'all',
        hospital: 'all',
        location: 'all',
        status: 'all',
        experience: 0
      });
    }
    if (onSortChange) {
      onSortChange('name');
    }
  };

  const hasActiveFilters = filters.specialization !== 'all' || 
                          filters.hospital !== 'all' || 
                          filters.location !== 'all' || 
                          filters.status !== 'all' || 
                          filters.experience > 0;

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersHeader}>
        <h3>
          <i className="fas fa-filter"></i>
          Filters & Sort
        </h3>
        {hasActiveFilters && (
          <button 
            className={styles.clearButton}
            onClick={clearFilters}
          >
            <i className="fas fa-times"></i>
            Clear All
          </button>
        )}
      </div>

      <div className={styles.filtersGrid}>
        {/* Specialization Filter */}
        <div className={styles.filterGroup}>
          <label htmlFor="specialization">Specialization</label>
          <select
            id="specialization"
            value={filters.specialization || 'all'}
            onChange={(e) => handleFilterChange('specialization', e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">All Specializations</option>
            {specializations.map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        {/* Hospital Filter */}
        <div className={styles.filterGroup}>
          <label htmlFor="hospital">Hospital</label>
          <select
            id="hospital"
            value={filters.hospital || 'all'}
            onChange={(e) => handleFilterChange('hospital', e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">All Hospitals</option>
            {hospitals.map((hospital) => (
              <option key={hospital} value={hospital}>{hospital}</option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div className={styles.filterGroup}>
          <label htmlFor="location">Location</label>
          <select
            id="location"
            value={filters.location || 'all'}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className={styles.filterGroup}>
          <label htmlFor="status">Availability</label>
          <select
            id="status"
            value={filters.status || 'all'}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">All Statuses</option>
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
          </select>
        </div>

        {/* Experience Filter */}
        <div className={styles.filterGroup}>
          <label htmlFor="experience">
            Min. Experience: {filters.experience || 0} years
          </label>
          <input
            type="range"
            id="experience"
            min="0"
            max="30"
            value={filters.experience || 0}
            onChange={(e) => handleFilterChange('experience', parseInt(e.target.value))}
            className={styles.rangeSlider}
          />
        </div>

        {/* Sort Options */}
        <div className={styles.filterGroup}>
          <label htmlFor="sort">Sort By</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="name">Name (A-Z)</option>
            <option value="rating">Rating (High to Low)</option>
            <option value="experience">Experience (High to Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DoctorFilters;
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import HospitalGrid from '../../components/hospital/HospitalGrid/HospitalGrid';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import FloatingActionButton from '../../components/common/FloatingActionButton/FloatingActionButton';
import { searchHospitals, filterHospitals, showNotification } from '../../utils/helpers';
import hospitalsData from '../../data/hospitals.json';
import styles from './Hospitals.module.scss';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    location: 'all'
  });

  // Get unique values for filter options
  const hospitalTypes = [...new Set(hospitals.map(hospital => hospital.type))];
  const locations = [...new Set(hospitals.map(hospital => hospital.location))];

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });

    // Simulate loading
    setTimeout(() => {
      setHospitals(hospitalsData);
      setFilteredHospitals(hospitalsData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let result = hospitals;

    // Apply search
    if (searchQuery) {
      result = searchHospitals(result, searchQuery);
    }

    // Apply filters
    result = filterHospitals(result, filters);

    setFilteredHospitals(result);
  }, [hospitals, searchQuery, filters]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: 'all',
      location: 'all'
    });
  };

  const handleViewDetails = (hospital) => {
    showNotification(`Viewing details for ${hospital.name}...`, 'info');
  };

  const handleContact = (hospital) => {
    showNotification(`Contacting ${hospital.name}...`, 'info');
  };

  const handleQuickBook = () => {
    showNotification('Opening quick booking...', 'info');
  };

  const handleChat = () => {
    showNotification('Opening chat...', 'info');
  };

  const handleEmergency = () => {
    showNotification('Connecting to emergency services...', 'warning');
  };

  const hasActiveFilters = filters.type !== 'all' || filters.location !== 'all';

  return (
    <div className={styles.hospitalsPage}>
      <div className={`${styles.pageHeader} container`}>
        <div className={styles.headerContent} data-aos="fade-up">
          <h1 className={styles.pageTitle}>Find Hospitals</h1>
          <p className={styles.pageSubtitle}>
            Discover top-rated hospitals and medical facilities near you. 
            Find the right healthcare institution for your needs.
          </p>
        </div>
        
        <div className={styles.searchSection} data-aos="fade-up" data-aos-delay="200">
          <SearchBar 
            placeholder="Search hospitals by name, location, or department..."
            onSearch={handleSearch}
          />
        </div>
      </div>

      <div className={`${styles.pageContent} container`}>
        <div className={styles.filtersContainer} data-aos="fade-up">
          <div className={styles.filtersHeader}>
            <h3>
              <i className="fas fa-filter"></i>
              Filters
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
            <div className={styles.filterGroup}>
              <label htmlFor="type">Hospital Type</label>
              <select
                id="type"
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className={styles.filterSelect}
              >
                <option value="all">All Types</option>
                {hospitalTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label htmlFor="location">Location</label>
              <select
                id="location"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className={styles.filterSelect}
              >
                <option value="all">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className={styles.resultsHeader} data-aos="fade-up">
          <h2>
            {filteredHospitals.length} Hospital{filteredHospitals.length !== 1 ? 's' : ''} Found
          </h2>
          {searchQuery && (
            <p>Search results for: "<strong>{searchQuery}</strong>"</p>
          )}
        </div>

        <HospitalGrid
          hospitals={filteredHospitals}
          onViewDetails={handleViewDetails}
          onContact={handleContact}
          loading={loading}
        />
      </div>

      <FloatingActionButton 
        onBookAppointment={handleQuickBook}
        onChat={handleChat}
        onEmergency={handleEmergency}
      />
    </div>
  );
};

export default Hospitals;
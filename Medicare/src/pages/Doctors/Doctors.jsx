import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import DoctorGrid from '../../components/doctor/DoctorGrid/DoctorGrid';
import DoctorFilters from '../../components/doctor/DoctorFilters/DoctorFilters';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import FloatingActionButton from '../../components/common/FloatingActionButton/FloatingActionButton';
import { searchDoctors, filterDoctors, sortDoctors, showNotification } from '../../utils/helpers';
import doctorsData from '../../data/doctors.json';
import styles from './Doctors.module.scss';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    specialization: 'all',
    hospital: 'all',
    location: 'all',
    status: 'all',
    experience: 0
  });
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });

    // Simulate loading
    setTimeout(() => {
      setDoctors(doctorsData);
      setFilteredDoctors(doctorsData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let result = doctors;

    // Apply search
    if (searchQuery) {
      result = searchDoctors(result, searchQuery);
    }

    // Apply filters
    result = filterDoctors(result, filters);

    // Apply sorting
    result = sortDoctors(result, sortBy);

    setFilteredDoctors(result);
  }, [doctors, searchQuery, filters, sortBy]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleBookAppointment = (doctor) => {
    showNotification(`Booking appointment with ${doctor.name}...`, 'info');
    // Handle appointment booking logic
  };

  const handleViewProfile = (doctor) => {
    showNotification(`Viewing ${doctor.name}'s profile...`, 'info');
    // Handle view profile logic
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

  return (
    <div className={styles.doctorsPage}>
      <div className={`${styles.pageHeader} container`}>
        <div className={styles.headerContent} data-aos="fade-up">
          <h1 className={styles.pageTitle}>Find Your Doctor</h1>
          <p className={styles.pageSubtitle}>
            Connect with qualified healthcare professionals across various specializations. 
            Search, filter, and book appointments with ease.
          </p>
        </div>
        
        <div className={styles.searchSection} data-aos="fade-up" data-aos-delay="200">
          <SearchBar 
            placeholder="Search doctors by name, specialization, hospital, or location..."
            onSearch={handleSearch}
          />
        </div>
      </div>

      <div className={`${styles.pageContent} container`}>
        <DoctorFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          doctors={doctors}
          onSortChange={handleSortChange}
          sortBy={sortBy}
        />

        <div className={styles.resultsHeader} data-aos="fade-up">
          <h2>
            {filteredDoctors.length} Doctor{filteredDoctors.length !== 1 ? 's' : ''} Found
          </h2>
          {searchQuery && (
            <p>Search results for: "<strong>{searchQuery}</strong>"</p>
          )}
        </div>

        <DoctorGrid
          doctors={filteredDoctors}
          onBookAppointment={handleBookAppointment}
          onViewProfile={handleViewProfile}
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

export default Doctors;
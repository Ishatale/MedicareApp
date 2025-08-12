import React from 'react';
import HospitalCard from '../HospitalCard/HospitalCard';
import styles from './HospitalGrid.module.scss';

const HospitalGrid = ({ hospitals, onViewDetails, onContact, loading = false }) => {
  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading hospitals...</p>
      </div>
    );
  }

  if (!hospitals || hospitals.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <i className="fas fa-hospital"></i>
        </div>
        <h3>No hospitals found</h3>
        <p>Try adjusting your search criteria or filters to find more hospitals.</p>
      </div>
    );
  }

  return (
    <div className={styles.hospitalGrid}>
      <div className={`${styles.gridContainer} grid grid-2`}>
        {hospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            hospital={hospital}
            onViewDetails={onViewDetails}
            onContact={onContact}
          />
        ))}
      </div>
    </div>
  );
};

export default HospitalGrid;
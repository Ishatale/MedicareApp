import React from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
import styles from './DoctorGrid.module.scss';

const DoctorGrid = ({ doctors, onBookAppointment, onViewProfile, loading = false }) => {
  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading doctors...</p>
      </div>
    );
  }

  if (!doctors || doctors.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <i className="fas fa-user-md"></i>
        </div>
        <h3>No doctors found</h3>
        <p>Try adjusting your search criteria or filters to find more doctors.</p>
      </div>
    );
  }

  return (
    <div className={styles.doctorGrid}>
      <div className={`${styles.gridContainer} grid grid-3`}>
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onBookAppointment={onBookAppointment}
            onViewProfile={onViewProfile}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorGrid;
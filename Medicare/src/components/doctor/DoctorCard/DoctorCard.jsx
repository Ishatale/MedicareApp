import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import { renderStars } from '../../../utils/helpers';
import styles from './DoctorCard.module.scss';

const DoctorCard = ({ doctor, onBookAppointment, onViewProfile }) => {
  const handleBookAppointment = () => {
    navigate('/dashboard', {
    state: {
      newAppointment: {
        doctor: doctor.name,
        specialty: doctor.specialization,
        date: new Date().toISOString().split('T')[0], // today's date
        time: '10:00 AM', // or dynamically set
        status: 'upcoming'
      }
    }
  });
};
const navigate = useNavigate();

  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile(doctor);
    }
  };

  return (
    <div className={`${styles.doctorCard} card`} data-aos="fade-up">
      <div className={styles.imageContainer}>
        <img 
          src={doctor.photo} 
          alt={doctor.name}
          className={styles.doctorImage}
        />
        <div className={`${styles.statusBadge} ${styles[doctor.status.toLowerCase()]}`}>
          <i className={doctor.status === 'Available' ? 'fas fa-check-circle' : 'fas fa-clock'}></i>
          {doctor.status}
        </div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.header}>
          <h3 className={styles.doctorName}>{doctor.name}</h3>
          <div className={styles.rating}>
            <span className={styles.stars}>{renderStars(doctor.rating)}</span>
            <span className={styles.ratingNumber}>({doctor.rating})</span>
          </div>
        </div>

        <div className={styles.specialization}>
          <i className="fas fa-user-md"></i>
          <span>{doctor.specialization}</span>
        </div>

        <div className={styles.education}>
          <i className="fas fa-graduation-cap"></i>
          <span>{doctor.education}</span>
        </div>

        <div className={styles.hospital}>
          <i className="fas fa-hospital"></i>
          <span>{doctor.hospital}</span>
        </div>

        <div className={styles.location}>
          <i className="fas fa-map-marker-alt"></i>
          <span>{doctor.location}</span>
        </div>

        <div className={styles.experience}>
          <i className="fas fa-clock"></i>
          <span>{doctor.experience} years experience</span>
        </div>

        <div className={styles.availability}>
          <i className="fas fa-calendar-alt"></i>
          <span>{doctor.availability}</span>
        </div>

        <div className={styles.diseases}>
          <h4>Specializes in:</h4>
          <div className={styles.diseasesList}>
            {doctor.diseases.slice(0, 3).map((disease, index) => (
              <span key={index} className={styles.diseaseTag}>
                {disease}
              </span>
            ))}
            {doctor.diseases.length > 3 && (
              <span className={styles.moreTag}>
                +{doctor.diseases.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          {/* <div>
            <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p> */}
          <button 
            className="btn btn-primary"
            onClick={handleBookAppointment}
            disabled={doctor.status === 'Booked'}
          >
            <i className="fas fa-calendar-plus"></i>
            {doctor.status === 'Available' ? 'Book Now' : 'Unavailable'}
          </button>
          {/* </div> */}
          <button 
            className="btn btn-secondary"
            onClick={handleViewProfile}
          >
            <i className="fas fa-eye"></i>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
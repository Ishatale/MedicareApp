import React from 'react';
import { renderStars } from '../../../utils/helpers';
import styles from './HospitalCard.module.scss';

const HospitalCard = ({ hospital, onViewDetails, onContact }) => {
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(hospital);
    }
  };

  const handleContact = () => {
    if (onContact) {
      onContact(hospital);
    }
  };

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'government':
        return styles.government;
      case 'private':
        return styles.private;
      case 'clinic':
        return styles.clinic;
      default:
        return styles.private;
    }
  };

  return (
    <div className={`${styles.hospitalCard} card`} data-aos="fade-up">
      <div className={styles.imageContainer}>
        <img 
          src={hospital.photo} 
          alt={hospital.name}
          className={styles.hospitalImage}
        />
        <div className={`${styles.typeBadge} ${getTypeColor(hospital.type)}`}>
          <i className={hospital.type === 'Government' ? 'fas fa-university' : 
                       hospital.type === 'Clinic' ? 'fas fa-clinic-medical' : 
                       'fas fa-building'}></i>
          {hospital.type}
        </div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.header}>
          <h3 className={styles.hospitalName}>{hospital.name}</h3>
          <div className={styles.rating}>
            <span className={styles.stars}>{renderStars(hospital.rating)}</span>
            <span className={styles.ratingNumber}>({hospital.rating})</span>
          </div>
        </div>

        <div className={styles.location}>
          <i className="fas fa-map-marker-alt"></i>
          <span>{hospital.location}</span>
        </div>

        <div className={styles.address}>
          <i className="fas fa-home"></i>
          <span>{hospital.address}</span>
        </div>

        <div className={styles.capacity}>
          <i className="fas fa-bed"></i>
          <span>{hospital.capacity} beds capacity</span>
        </div>

        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <i className="fas fa-phone"></i>
            <span>{hospital.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <i className="fas fa-envelope"></i>
            <span>{hospital.email}</span>
          </div>
        </div>

        <div className={styles.departments}>
          <h4>Departments:</h4>
          <div className={styles.departmentsList}>
            {hospital.departments.slice(0, 4).map((department, index) => (
              <span key={index} className={styles.departmentTag}>
                {department}
              </span>
            ))}
            {hospital.departments.length > 4 && (
              <span className={styles.moreDepartments}>
                +{hospital.departments.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          <button 
            className="btn btn-primary"
            onClick={handleViewDetails}
          >
            <i className="fas fa-eye"></i>
            View Details
          </button>
          <button 
            className="btn btn-secondary"
            onClick={handleContact}
          >
            <i className="fas fa-phone"></i>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
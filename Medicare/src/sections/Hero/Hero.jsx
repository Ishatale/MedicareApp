import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import styles from './Hero.module.scss';

const Hero = () => {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Handle search functionality - could navigate to search results
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.backgroundPattern}></div>
      </div>
      
      <div className={`${styles.heroContent} container`}>
        <div className={styles.heroText} data-aos="fade-up">
          <h1 className={styles.heroTitle}>
            Your Health, <span className={styles.highlight}>Our Priority</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Connect with top-rated doctors and hospitals near you. 
            Book appointments instantly and get the care you deserve.
          </p>
          
          <div className={styles.heroSearch} data-aos="fade-up" data-aos-delay="200">
            <SearchBar 
              placeholder="Search doctors, hospitals, or specializations..."
              onSearch={handleSearch}
            />
          </div>
          
          <div className={styles.heroActions} data-aos="fade-up" data-aos-delay="400">
            <Link to="/doctors" className="btn btn-primary btn-lg">
              <i className="fas fa-user-md"></i>
              Find Doctors
            </Link>
            <Link to="/hospitals" className="btn btn-secondary btn-lg">
              <i className="fas fa-hospital"></i>
              Find Hospitals
            </Link>
          </div>
        </div>
        
        <div className={styles.heroStats} data-aos="fade-up" data-aos-delay="600">
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Qualified Doctors</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Partner Hospitals</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10k+</div>
            <div className={styles.statLabel}>Happy Patients</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}> 24/7</div>
            <div className={styles.statLabel}>Emergency Care</div>
          </div>
        </div>
      </div>
      
      <div className={styles.heroImage} data-aos="fade-left" data-aos-delay="300">
        <img 
          src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
          alt="Healthcare professionals"
          className={styles.mainImage}
        />
        <div className={styles.floatingCard} data-aos="zoom-in" data-aos-delay="800">
          <div className={styles.cardIcon}>
            <i className="fas fa-heartbeat"></i>
          </div>
          <div className={styles.cardText}>
            <h4>Quick Booking</h4>
            <p>Book appointments in seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
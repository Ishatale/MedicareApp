import React from 'react';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const features = [
    {
      icon: 'fas fa-user-md',
      title: 'Expert Doctors',
      description: 'Connect with certified and experienced healthcare professionals across various specializations.'
    },
    {
      icon: 'fas fa-clock',
      title: '24/7 Availability',
      description: 'Round-the-clock emergency services and appointment scheduling for your convenience.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure Platform',
      description: 'Your health data is protected with industry-standard security measures and privacy protocols.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Easy Booking',
      description: 'Book appointments instantly through our user-friendly platform on any device.'
    }
  ];

  return (
    <section className={styles.aboutUs} id="about">
      <div className={`${styles.aboutContainer} container`}>
        <div className={styles.aboutHeader} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Why Choose MediCare?</h2>
          <p className={styles.sectionSubtitle}>
            We're revolutionizing healthcare accessibility by connecting patients 
            with top-quality medical professionals and facilities.
          </p>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText} data-aos="fade-right">
            <div className={styles.textContent}>
              <h3>Transforming Healthcare Access</h3>
              <p>
                MediCare is your trusted healthcare companion, designed to bridge the gap 
                between patients and healthcare providers. Our platform ensures you get 
                the right care at the right time, wherever you are.
              </p>
              <p>
                With an extensive network of qualified doctors and accredited hospitals, 
                we make quality healthcare accessible, affordable, and convenient for everyone.
              </p>
              
              <div className={styles.achievements}>
                <div className={styles.achievement}>
                  <div className={styles.achievementNumber}>98%</div>
                  <div className={styles.achievementLabel}>Patient Satisfaction</div>
                </div>
                <div className={styles.achievement}>
                  <div className={styles.achievementNumber}>5M+</div>
                  <div className={styles.achievementLabel}>Appointments Booked</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.aboutImage} data-aos="fade-left">
            <img 
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop" 
              alt="Healthcare team"
            />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <i className="fas fa-heart"></i>
                <span>Caring for your health</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.features} data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={styles.featureCard}
                data-aos="zoom-in"
                data-aos-delay={300 + (index * 100)}
              >
                <div className={styles.featureIcon}>
                  <i className={feature.icon}></i>
                </div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../../sections/Hero/Hero';
import AboutUs from '../../sections/AboutUs/AboutUs';
import Testimonials from '../../sections/Testimonials/Testimonials';
import ContactUs from '../../sections/ContactUs/ContactUs';
import FloatingActionButton from '../../components/common/FloatingActionButton/FloatingActionButton';
import { showNotification } from '../../utils/helpers';
import styles from './Home.module.scss';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const handleBookAppointment = () => {
    showNotification('Redirecting to appointment booking...', 'info');
    // Navigate to doctors page or appointment booking
  };

  const handleChat = () => {
    showNotification('Opening chat...', 'info');
    // Open chat modal or navigate to chat
  };

  const handleEmergency = () => {
    showNotification('Connecting to emergency services...', 'warning');
    // Handle emergency call functionality
  };

  return (
    <div className={styles.homePage}>
      <Hero />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      
      <FloatingActionButton 
        onBookAppointment={handleBookAppointment}
        onChat={handleChat}
        onEmergency={handleEmergency}
      />
    </div>
  );
};

export default Home;
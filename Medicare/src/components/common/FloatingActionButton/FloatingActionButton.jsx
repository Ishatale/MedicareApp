import React, { useState } from 'react';
import styles from './FloatingActionButton.module.scss';
import ChatBot from '../ChatBot/ChatBot';

const FloatingActionButton = ({ onBookAppointment, onEmergency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAction = (action) => {
    setIsOpen(false);
    if (action === 'book' && onBookAppointment) {
      onBookAppointment();
    } else if (action === 'chat') {
      setIsChatOpen(true);
    } else if (action === 'emergency' && onEmergency) {
      onEmergency();
    }
  };

  return (
    <>
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <div className={styles.fabContainer}>
        <div className={`${styles.fabMenu} ${isOpen ? styles.open : ''}`}>
          <button 
            className={`${styles.fabButton} ${styles.emergency}`}
            onClick={() => handleAction('emergency')}
            title="Emergency Call"
          >
            <i className="fas fa-ambulance"></i>
          </button>
          
          <button 
            className={`${styles.fabButton} ${styles.chat}`}
            onClick={() => handleAction('chat')}
            title="Quick Chat"
          >
            <i className="fas fa-comments"></i>
          </button>
          
          <button 
            className={`${styles.fabButton} ${styles.appointment}`}
            onClick={() => handleAction('book')}
            title="Book Appointment"
          >
            <i className="fas fa-calendar-plus"></i>
          </button>
        </div>
        
        <button 
          className={`${styles.fabMain} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Quick Actions"
        >
          <i className={isOpen ? 'fas fa-times' : 'fas fa-plus'}></i>
        </button>
      </div>
    </>
  );
};

export default FloatingActionButton;
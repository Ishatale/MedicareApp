import React, { useState } from 'react';
import styles from './NotificationBell.module.scss';

const NotificationBell = () => {
  const [notifications] = useState([
    {
      id: 1,
      message: "Appointment confirmed with Dr. Sarah Johnson",
      time: "2 minutes ago",
      type: "success"
    },
    {
      id: 2,
      message: "Reminder: Check-up tomorrow at 10:00 AM",
      time: "1 hour ago",
      type: "info"
    },
    {
      id: 3,
      message: "New doctor available in Cardiology",
      time: "3 hours ago",
      type: "info"
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.length;

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.notificationBell}>
      <button 
        className={styles.bellButton}
        onClick={toggleNotifications}
        aria-label="Notifications"
      >
        <i className="fas fa-bell"></i>
        {unreadCount > 0 && (
          <span className={styles.badge}>{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />
          <div className={styles.notificationPanel}>
            <div className={styles.header}>
              <h3>Notifications</h3>
              <button 
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className={styles.notificationList}>
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`${styles.notificationItem} ${styles[notification.type]}`}
                  >
                    <div className={styles.icon}>
                      <i className={
                        notification.type === 'success' ? 'fas fa-check-circle' :
                        notification.type === 'warning' ? 'fas fa-exclamation-triangle' :
                        'fas fa-info-circle'
                      }></i>
                    </div>
                    <div className={styles.content}>
                      <p className={styles.message}>{notification.message}</p>
                      <span className={styles.time}>{notification.time}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <i className="fas fa-bell-slash"></i>
                  <p>No notifications</p>
                </div>
              )}
            </div>
            
            {notifications.length > 0 && (
              <div className={styles.footer}>
                <button className={styles.clearAll}>
                  Clear all notifications
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationBell;
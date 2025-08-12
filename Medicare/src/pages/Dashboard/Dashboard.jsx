import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Dashboard.module.scss';

const Dashboard = () => {
  
  const [activeTab, setActiveTab] = useState('appointments');
const location = useLocation();
const newAppointment = location.state?.newAppointment;

  const userInfo = {
    name: 'Anuj Sharma',
    email: 'anujsharma@example.com',
    joinDate: 'January 2024',
    profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
  };

  const defaultAppointments  = [
    {
      id: 1,
      doctor: 'Dr. Arvind Mehra',
      specialty: 'Cardiologist',
      date: '2024-02-15',
      time: '10:00 AM',
      status: 'upcoming'
    },
    {
      id: 2,
      doctor: 'Dr. Neha Sharma',
      specialty: 'Dermatologist',
      date: '2024-02-10',
      time: '2:30 PM',
      status: 'completed'
    }
  ];

  const mergedAppointments = newAppointment
  ? [
      ...defaultAppointments,
      {
        ...newAppointment,
        id: defaultAppointments.length + 1
      }
    ]
  : defaultAppointments;

const appointments = mergedAppointments;

  const healthRecords = [
    {
      id: 1,
      type: 'Blood Test',
      date: '2024-01-20',
      doctor: 'Dr. Sarah Wilson',
      status: 'normal'
    },
    {
      id: 2,
      type: 'X-Ray',
      date: '2024-01-15',
      doctor: 'Dr. Robert Johnson',
      status: 'review'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'appointments':
        return (
          <div className={styles.appointmentsGrid}>
            {appointments.map(appointment => (
              <div key={appointment.id} className={styles.appointmentCard}>
                <div className={styles.appointmentHeader}>
                  <span className={`${styles.status} ${styles[appointment.status]}`}>
                    {appointment.status}
                  </span>
                  <span className={styles.date}>{appointment.date}</span>
                </div>
                <h4>{appointment.doctor}</h4>
                <p className={styles.specialty}>{appointment.specialty}</p>
                <p className={styles.time}>
                  <i className="fas fa-clock"></i> {appointment.time}
                </p>
              </div>
            ))}
          </div>
        );
      case 'health-records':
        return (
          <div className={styles.recordsGrid}>
            {healthRecords.map(record => (
              <div key={record.id} className={styles.recordCard}>
                <div className={styles.recordHeader}>
                  <span className={`${styles.status} ${styles[record.status]}`}>
                    {record.status}
                  </span>
                  <span className={styles.date}>{record.date}</span>
                </div>
                <h4>{record.type}</h4>
                <p className={styles.doctor}>{record.doctor}</p>
                <button className={styles.viewButton}>
                  <i className="fas fa-file-medical"></i> View Report
                </button>
              </div>
            ))}
          </div>
        );
      case 'profile':
        return (
          <div className={styles.profileSection}>
            <div className={styles.profileForm}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" defaultValue={userInfo.name} />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" defaultValue={userInfo.email} />
              </div>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
              <div className={styles.formGroup}>
                <label>Address</label>
                <textarea placeholder="Enter your address"></textarea>
              </div>
              <button className={styles.saveButton}>
                <i className="fas fa-save"></i> Save Changes
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <aside className={styles.sidebar}>
          <div className={styles.userProfile}>
            <div className={styles.profileImage}>
              <img src={userInfo.profileImage} alt={userInfo.name} />
            </div>
            <h3>{userInfo.name}</h3>
            <p>Member since {userInfo.joinDate}</p>
          </div>
          <nav className={styles.dashboardNav}>
            <button
              className={`${styles.navButton} ${activeTab === 'appointments' ? styles.active : ''}`}
              onClick={() => setActiveTab('appointments')}
            >
              <i className="fas fa-calendar-check"></i>
              Appointments
            </button>
            <button
              className={`${styles.navButton} ${activeTab === 'health-records' ? styles.active : ''}`}
              onClick={() => setActiveTab('health-records')}
            >
              <i className="fas fa-file-medical"></i>
              Health Records
            </button>
            <button
              className={`${styles.navButton} ${activeTab === 'profile' ? styles.active : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <i className="fas fa-user"></i>
              Profile
            </button>
          </nav>
        </aside>
        <main className={styles.mainContent}>
          <div className={styles.contentHeader}>
            <h2>
              {activeTab === 'appointments' && 'My Appointments'}
              {activeTab === 'health-records' && 'Health Records'}
              {activeTab === 'profile' && 'Profile Settings'}
            </h2>
          </div>
          <div className={styles.contentBody}>
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
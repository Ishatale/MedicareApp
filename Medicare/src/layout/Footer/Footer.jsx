import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Find Doctors', path: '/doctors' },
      { name: 'Find Hospitals', path: '/hospitals' },
      { name: 'Book Appointments', path: '/dashboard' },
      { name: 'Emergency Care', path: '/emergency' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' }
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' }
    ]
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Link to="/" className={styles.logo}>
              <i className="fas fa-heartbeat"></i>
              <span>MediCare</span>
            </Link>
            <p className={styles.brandDescription}>
              Your trusted healthcare companion, connecting you with top-quality 
              medical professionals and facilities for comprehensive care.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.footerContact}>
            <h4>Contact Info</h4>
            <div className={styles.contactItem}>
              <i className="fas fa-phone"></i>
              <span>+91 8456539562</span>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-envelope"></i>
              <span>support@medicare.com</span>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Healthcare Ave<br />Medical City, Mh 440009</span>
            </div>
            <div className={styles.emergencyNote}>
              <i className="fas fa-exclamation-triangle"></i>
              <span>For medical emergencies, call 911 immediately</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              © {currentYear} MediCare. All rights reserved.
            </p>
            <div className={styles.certifications}>
              <span>HIPAA Compliant</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
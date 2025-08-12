import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toggleTheme, initializeTheme } from '../../utils/helpers';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const theme = initializeTheme();
    setIsDark(theme === 'dark');
  }, []);

  const handleThemeToggle = () => {
    const newTheme = toggleTheme();
    setIsDark(newTheme === 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/doctors', label: 'Doctors' },
    { path: '/hospitals', label: 'Hospitals' },
    { path: '/dashboard', label: 'Dashboard' },
    
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <Link to="/" className={styles.logo}>
          <i className="fas fa-heartbeat"></i>
          <span>MediCare</span>
        </Link>

        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${isActive(link.path) ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.navActions}>
          <NotificationBell />
          
          <button
            className={styles.themeToggle}
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
          >
            <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>

          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
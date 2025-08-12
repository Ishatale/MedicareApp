// Theme management
export const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  return newTheme;
};

export const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

// Search and filter utilities
export const searchDoctors = (doctors, query) => {
  if (!query) return doctors;
  
  const searchTerm = query.toLowerCase();
  return doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchTerm) ||
    doctor.specialization.toLowerCase().includes(searchTerm) ||
    doctor.hospital.toLowerCase().includes(searchTerm) ||
    doctor.location.toLowerCase().includes(searchTerm) ||
    doctor.diseases.some(disease => disease.toLowerCase().includes(searchTerm))
  );
};

export const searchHospitals = (hospitals, query) => {
  if (!query) return hospitals;
  
  const searchTerm = query.toLowerCase();
  return hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm) ||
    hospital.location.toLowerCase().includes(searchTerm) ||
    hospital.type.toLowerCase().includes(searchTerm) ||
    hospital.departments.some(dept => dept.toLowerCase().includes(searchTerm))
  );
};

export const filterDoctors = (doctors, filters) => {
  let filtered = [...doctors];
  
  if (filters.specialization && filters.specialization !== 'all') {
    filtered = filtered.filter(doctor => 
      doctor.specialization.toLowerCase() === filters.specialization.toLowerCase()
    );
  }
  
  if (filters.hospital && filters.hospital !== 'all') {
    filtered = filtered.filter(doctor => 
      doctor.hospital.toLowerCase().includes(filters.hospital.toLowerCase())
    );
  }
  
  if (filters.experience) {
    filtered = filtered.filter(doctor => doctor.experience >= filters.experience);
  }
  
  if (filters.status && filters.status !== 'all') {
    filtered = filtered.filter(doctor => 
      doctor.status.toLowerCase() === filters.status.toLowerCase()
    );
  }
  
  return filtered;
};

export const filterHospitals = (hospitals, filters) => {
  let filtered = [...hospitals];
  
  if (filters.type && filters.type !== 'all') {
    filtered = filtered.filter(hospital => 
      hospital.type.toLowerCase() === filters.type.toLowerCase()
    );
  }
  
  if (filters.location && filters.location !== 'all') {
    filtered = filtered.filter(hospital => 
      hospital.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  }
  
  return filtered;
};

// Sort utilities
export const sortDoctors = (doctors, sortBy) => {
  const sorted = [...doctors];
  
  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'experience':
      return sorted.sort((a, b) => b.experience - a.experience);
    default:
      return sorted;
  }
};

// Rating utilities
export const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push('★');
  }
  
  if (hasHalfStar) {
    stars.push('☆');
  }
  
  while (stars.length < 5) {
    stars.push('☆');
  }
  
  return stars.join('');
};

// Date utilities
export const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const formatTime = (timeString) => {
  return timeString;
};

// Notification utilities
export const showNotification = (message, type = 'info') => {
  // This would integrate with a toast notification system
  console.log(`${type.toUpperCase()}: ${message}`);
};

// Local storage utilities
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

// Validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s-()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};
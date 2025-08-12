// DoctorRegister.js
import React, { useState } from 'react';
import axiosClient from './axiosClient';

function PatientRegister() {
  const [patient, setpatient] = useState({
    name: '',
    email: '',
    password: '',
    
  });

  const handleChange = (e) => {
    setpatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosClient.post('/patient/register', patient);
      alert('Patient registered!');
    } catch (error) {
      alert('Error: ' + error.response?.data || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <input name="email" onChange={handleChange} placeholder="Email" />

      <button type="submit">Register</button>
    </form>
  );
}

export default PatientRegister;

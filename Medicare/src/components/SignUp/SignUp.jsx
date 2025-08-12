import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

// function SignUpForm() {
//   const [state, setState] = React.useState({
//     // name: "",
//     // password: "",
//     // email: "",
//     // usertype: "",

   
//   });
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('doctor'); 
//   // const handleChange = evt => {
//   //   const value = evt.target.value;
//   //   setState({
//   //     ...state,
//   //     [evt.target.name]: value
//   //   });
//   // };
function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('doctor'); // default doctor

  // const handleRegister = async (e) => {
  //   e.preventDefault();


  // const navigate = useNavigate();
// 
  const handleOnSubmit = async(evt) => {
    evt.preventDefault();

    let endpoint = '';
    if (userType === 'doctor') {
      endpoint = 'http://localhost:8080/auth/register/doctor';
    } else if (userType === 'patient') {
      endpoint = 'http://localhost:8080/auth/register/patient';
    } else {
      alert("Invalid user type!");
      return;
    }

     try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: name,
  password: password,
  email: email,
  userType: userType}),
    });
   

    if (response.ok) {
      alert("Registered successfully!");
      // redirect to login or home page
    } else {
      alert("Registration failed.");
    }
  } catch (error) {
    console.error("Error during signup:", error);
  }
};

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
       <br></br>
        <span>or use your email for registration</span>
        <br></br>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <select
          name="usertype"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        ><option value="">Select user type</option>
           <option value="doctor">Doctor</option>
           <option value="patient">Patient</option>
          </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;

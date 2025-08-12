import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('doctor');
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  const endpoint =
    userType === "doctor"
      ? "http://localhost:8080/auth/login/doctor"
      : "http://localhost:8080/auth/login/patient";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        email : email,
         password : password ,
        userType: userType}),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Login failed");
    }

    const data = await res.json();
    console.log("Login success", data);

    if (userType === "doctor") {
      navigate("/home");
    } else {
      navigate("/home");
    }

  } catch (err) {
    console.error("Login failed:", err.message);
    alert("Login failed: " + err.message);
  }
};


  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleLogin}>
        <h1>Sign in</h1>
       <br></br>
        <span>or use your account</span>
        <br></br>
        <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <select value={userType} onChange={(e) => setUserType(e.target.value)}>
    <option value="doctor">Doctor</option>
    <option value="patient">Patient</option>
  </select>

  <button type="submit">Sign In</button>
</form>
    </div>
  );
}

export default SignInForm;

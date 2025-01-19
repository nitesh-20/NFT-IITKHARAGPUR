import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import "./Login.css"

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        // Redirect to the dashboard or another page on successful login
        window.location.href = "/dashboard"; 
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleGoogleSuccess = (response) => {
    // Handle the response after successful Google login
    console.log(response);
    // You can send the response data to your backend to validate and create a session
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login failed", error);
    alert("Google login failed. Please try again.");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="/signup">Sign up here</a>
      </p>

      {/* Google Login Button */}
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;

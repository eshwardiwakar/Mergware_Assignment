import { useState } from "react";
import "./index.css";
import {Link} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
      // Perform login logic here
    }
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit} className="formContainer">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p>{emailError}</p>}
        <Link to="/home">
          <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;

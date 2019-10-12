import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInput = e => {
    e.preventDefault();
    setErrorMessage(null);
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleLogin = e => {
    if (username === "" || password === "")
      setErrorMessage("Please enter all the fields to login");
  };

  return (
    <div className="login-container">
      <div className="heading">
        <span>Member Login</span>
      </div>
      <div className="details">
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="password"
            value={password}
            onChange={handleInput}
          />
          <span
            className="show-hide"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i class={`far ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
          </span>
        </div>
        <div>
          <button onClick={handleLogin}>
            Login<i class="fas fa-user-lock"></i>
          </button>
        </div>
        {errorMessage && (
          <div className="error-message">
            <i class="fas fa-exclamation-circle"></i>
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

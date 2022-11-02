import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/login.css";

function LoginForm(props) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    // Use a GET request
    const userStatus = "123"; /* GET REQUEST */

    // Compare user info
    if (userStatus) {
      if (userStatus === "404") {
        // Invalid password
        props.setIsSubmitted(true);
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        props.setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
          {renderErrorMessage("username")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value={"Submit"}/>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
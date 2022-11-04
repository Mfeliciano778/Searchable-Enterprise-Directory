import LoginForm from './components/Login';
import React, { useState } from "react";
import DirectoryApp from './components/DirectoryApp';
import './App.css';
import "./styles/login.css";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  if (!isSubmitted){
    return (
      <div className="app">
      <div className="login-form">
          <div className="title">Sign In</div>
          <LoginForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
        </div>
      </div>
    );
  } else {
    return (
      <DirectoryApp />
    )
  }
}

export default App;

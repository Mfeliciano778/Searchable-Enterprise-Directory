import LoginForm from './components/Login';
import React, { useState } from "react";
import EmployeeCardList from './components/EmployeeList';
import './App.css';
import "./styles/login.css";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const listOfEmployees = [
    {"employee_id": 1, "name":"Darth Vader", "phone":"860-555-0000", "role":"Sith Lord", "location":"Mustafar", "salary":999999},
    {"employee_id": 2, "name":"Yoda", "phone":"860-555-1111", "role":"Jedi", "location":"Dagobah", "salary":750000},
    {"employee_id": 3, "name":"Luke Skywalker", "phone":"860-555-2222", "role":"Jedi", "location":"Tattoine", "salary":500000},
    {"employee_id": 4, "name":"Toby", "phone":"860-555-3333", "role":"HR", "location":"Death Star", "salary":7500}
  ]
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
      <div className='App'>
      <div className='employer-list'>
        <div className='title'><h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1></div>
        <EmployeeCardList data={listOfEmployees}/>
      </div>
    </div>
    )
  }
}

export default App;

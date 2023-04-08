import React, { useState } from "react";

import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
// import ShowExam from "./ShowExam/ShowExam";
// import ViewHistory from './ShowExamsHistory/ViewHistory';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );

}

export default App;

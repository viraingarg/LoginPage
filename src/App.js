import React from "react";
import "./App.css";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      <div className="body-container">
        <div className="left"></div>
        <div className="right">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;

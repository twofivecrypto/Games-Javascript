import React from 'react';
import logo from './logo.svg';
import './App.css';

function WelcomeMessage() {
  return <p>Welcome to the Eternal Mind of the Mansa</p>;
}

function App() {
  const message = 'Hello';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WelcomeMessage />
        {message === 'Hello' ? <p>The message was "Hello!"</p> : null} {/* Render the result of the expression */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

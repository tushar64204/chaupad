import React, { useState } from 'react';
import './App.css'; // Ensure you import your CSS file here

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHindi, setIsHindi] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setIsHindi(!isHindi);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <div className="wedding-board">
          <h1>{isHindi ? 'शादी का मेन्यू' : 'Wedding Menu'}</h1>
          <div className="lighting"></div>
        </div>
        <div className="controls">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
          <button onClick={toggleLanguage}>
            {isHindi ? 'Switch to English' : 'Switch to Hindi'}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;

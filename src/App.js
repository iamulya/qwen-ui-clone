import React from 'react';
import './App.css'; // Import the global CSS
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import HelpIcon from './components/HelpIcon';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
      <HelpIcon />
    </div>
  );
}

export default App;
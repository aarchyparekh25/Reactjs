import React, { useState } from 'react';
import UserList from './UserList';
import './App.css';

// Your component code...

function App() {
  return (
    <div className="App">
      <style>{`
        .App.overflow-y-hidden {
          overflow-y: hidden;
        }
      `}</style>
      <div className="app-container">
      <div className="app-content">
        <UserList />
      </div>
    </div>
    </div>
  );
}

export default App;


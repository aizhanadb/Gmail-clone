import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <Sidebar/>
      <h2>Lets build gmail</h2>
    </div>
  );
}

export default App;

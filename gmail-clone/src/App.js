import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList';
import Header from './components/Header';
import Mail from './components/Mail';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='app_body'>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<EmailList/>}/>
        <Route path="/mail" element={<Mail/>}/>
        </Routes> 
      </div>
    </div>
  );
}

export default App;

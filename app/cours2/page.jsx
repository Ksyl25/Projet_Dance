"use client"
// src/App.js
// 

import React from 'react';
import EventList from '../../components/EventList';
import Navbar from "../../Components/NavBar";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <EventList />
    </div>
  );
};

export default App;

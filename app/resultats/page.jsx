"use client"

import React from 'react';
import EventList from '../../components/Eventlist';
import Navbar from "../../Components/NavBar";

const App = () => {
  return (
    <div className="App">
        <Navbar/>
      <EventList />
    </div>
  );
};

export default App;

// import React from 'react';
import CalendarView from '../components/CalendarView/CalendarView';
import Navbar from '../components/Navbar/Navbar';

function Dashboard() {
  return (
    <div className='app-container'>
        <Navbar/>
        <CalendarView/>
    </div>
  )
}

export default Dashboard
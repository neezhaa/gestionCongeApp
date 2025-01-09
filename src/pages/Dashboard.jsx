// import React from 'react';
import AdminLeaveRequests from '../components/AdminLeaveRequests/AdminLeaveRequests';
import Navbar from '../components/Navbar/Navbar';

function Dashboard() {
  return (
    <div className='app-container'>
        <Navbar/>
        <AdminLeaveRequests/>
    </div>
  )
}

export default Dashboard
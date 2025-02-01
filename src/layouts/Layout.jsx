// import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

function Layout() {
  return (
    <div className='app-container'>
        <Navbar />
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout
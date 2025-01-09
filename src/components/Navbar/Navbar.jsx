// import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import home from '../../assets/home.svg'
import bell from '../../assets/bell.svg'
import settings from '../../assets/settings.svg'
import logOut from '../../assets/log-out.svg'
import calendar from '../../assets/calendar.svg'
import profilePicture from '../../assets/profilePicture.svg'
import './Navbar.css'
import { useState } from 'react'
// import useSignOut from 'react-auth-kit/hooks/useSignOut'

function Navbar() {
    const [activeItem, setActiveItem] = useState("dashboard");
    const navigate = useNavigate();

    const handleClick = (item) => {
      setActiveItem(item);
  }

    const handleLogout = () => {
      // useSignOut();
      navigate('/');
    };
  return (
    <div className="navbar">
            <div className="navbar-header">
                <div className="app-icon">
                    <img src={logo} alt="Logo" />
                </div>
            </div>

            <ul className="navbar-list">
                <li onClick={()=>handleClick('dashboard')} className={`navbar-list-item ${activeItem === 'dashboard' ?"active":""}`}>
                    <NavLink to="/">
                      <img src={home} alt="Home"/>
                    </NavLink>
                </li>
                <li onClick={()=>handleClick('calendar')} className={`navbar-list-item ${activeItem === 'calendar' ?"active":""}`}>
                    <NavLink to="">
                        <img src={calendar} alt="Calendar" />
                    </NavLink>
                </li>
                <li onClick={()=>handleClick('notification')} className={`navbar-list-item ${activeItem === 'notification' ?"active":""}`}>
                    <NavLink to="">
                    <img src={bell} alt="Notification"/>
                    </NavLink>
                </li>
                <li onClick={()=>handleClick('settings')} className={`navbar-list-item ${activeItem === 'settings' ?"active":""}`}>
                    <NavLink to="">
                      <img src={settings} alt="Settings"/>
                    </NavLink>
                </li>
                
            </ul>

            <div className="account-info">
                <button className="account-logout" onClick={handleLogout}>
                  <img src={logOut} alt="Logout"/>
                </button>
                <div className="account-info-picture">
                    <img src={profilePicture} alt="Profile" />
                    {/* <span className='user'>NB</span> */}
                </div>
            </div>
        </div>
  )
}

export default Navbar
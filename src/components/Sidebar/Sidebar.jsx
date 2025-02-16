import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import home from '../../assets/home.svg'
import bell from '../../assets/bell.svg'
import settings from '../../assets/settings.svg'
import logOut from '../../assets/log-out.svg'
import calendar from '../../assets/calendar.svg'
import profilePicture from '../../assets/profilePicture.svg'
import './Sidebar.css'
import { useState } from 'react'
import Profile from '../Profile/Profile'
import { useAuth } from '../../context/AuthContext'
// import useSignOut from 'react-auth-kit/hooks/useSignOut'

function sidebar() {
    const [activeItem, setActiveItem] = useState("dashboard");
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const { logout } = useAuth();
    

    const showUserInfo = () =>{
      setActive(prev => !prev);
    }

    const handleClick = (item) => {
      setActiveItem(item);
  }

    const handleLogout = () => {
      logout()
      // useSignOut();
      navigate('/login');
    };
  return (
    <div className="sidebar">
            {active && <Profile active={active} />}
            <div className="sidebar-header">
                <div className="app-icon">
                    <img src={logo} alt="Logo" />
                </div>
            </div>

            <ul className="sidebar-list">
                <li onClick={()=>handleClick('dashboard')} className={`sidebar-list-item ${activeItem === 'dashboard' ?"active":""}`}>
                    <NavLink to="/">
                      <img src={home} alt="Home"/>
                    </NavLink>
                </li>
                <li onClick={()=>handleClick('calendar')} className={`sidebar-list-item ${activeItem === 'calendar' ?"active":""}`}>
                    <NavLink to="">
                        <img src={calendar} alt="Calendar" />
                    </NavLink>
                </li>
                <li onClick={()=>handleClick('notification')} className={`sidebar-list-item ${activeItem === 'notification' ?"active":""}`}>
                    <NavLink to="">
                    <img src={bell} alt="Notification"/>
                    <span className="absolute top-[10px] right-[20px] flex size-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
                    </span>
                    </NavLink>
                </li>
                <li onClick={()=>handleClick('settings')} className={`relative sidebar-list-item ${activeItem === 'settings' ?"active":""}`}>
                    <NavLink to="/settings">
                      <img src={settings} alt="Settings"/>
                    </NavLink>
                </li>
            </ul>

            <div className="account-info">
                <button className="account-logout" onClick={handleLogout}>
                  <img src={logOut} alt="Logout"/>
                </button>
                <div onClick={showUserInfo} className="account-info-picture">
                    <img src={profilePicture} alt="Profile" />
                    {/* <span className='user'>NB</span> */}
                </div>
            </div>
        </div>
  )
}

export default sidebar
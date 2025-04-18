import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Notifications from './Notifications/Notifications'
import { 
  HomeIcon,
  UsersIcon,
  CalendarIcon,
  BellIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import profilePicture from '../assets/profilePicture.svg'

function Sidebar() {
    const [activeItem, setActiveItem] = useState("dashboard");
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [activeNotif, setActiveNotif] = useState(false)
    const { auth } = useAuth();

    const handleItemClick = (item) => {
      setActiveItem(item);
    }

    const handleLogout = () => {
      logout()
      navigate('/login');
    };

    return (
        <div className="fixed left-0 top-0 h-screen w-16 flex flex-col bg-white shadow-lg z-50">
            {activeNotif && <Notifications changeStateNotif={setActiveNotif} />}

            {/* Logo */}
            <div className="flex items-center justify-center h-16 shadow-sm">
                <img 
                    src="/logo.svg" 
                    alt="Logo" 
                    className="w-9 h-9 cursor-pointer transition-transform hover:scale-105"
                />
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 flex flex-col items-center py-4 space-y-2">
                <NavLink 
                    to="/"
                    onClick={() => handleItemClick('dashboard')}
                    className={`group relative p-3 rounded-lg transition-colors ${
                      activeItem === 'dashboard' 
                        ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-500' 
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                >
                    <HomeIcon className="w-6 h-6" />
                    <span className="sidebar-tooltip">Dashboard</span>
                </NavLink>

                {auth?.user?.is_admin? (
                    <NavLink 
                        to="/employees"
                        onClick={() => handleItemClick('employees')}
                        className={`group relative p-3 rounded-lg transition-colors ${
                          activeItem === 'employees' 
                            ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-500' 
                            : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        <UsersIcon className="w-6 h-6" />
                        <span className="sidebar-tooltip">Employés</span>
                    </NavLink>
                ) : null}

                <button
                    onClick={() => handleItemClick('calendar')}
                    className={`group relative p-3 rounded-lg transition-colors ${
                      activeItem === 'calendar' 
                        ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-500' 
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                >
                    <CalendarIcon className="w-6 h-6" />
                    <span className="sidebar-tooltip">Calendrier</span>
                </button>

                {auth?.user?.is_admin ? (
                    <NavLink
                        to='/all-requests'
                        onClick={() => handleItemClick('all-requests')}
                        className={`group relative p-3 rounded-lg transition-colors ${
                          activeItem === 'all-requests'
                            ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-500'
                            : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        <BellIcon className="w-6 h-6" />
                        <span className="absolute top-2 right-2 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span className="sidebar-tooltip">Demandes</span>
                    </NavLink>
                ) : (
                    <NavLink
                        to='/all-demandes'
                        onClick={() => handleItemClick('all-requests')}
                        className={`group relative p-3 rounded-lg transition-colors ${
                          activeItem === 'all-requests'
                            ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-500'
                            : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        <BellIcon className="w-6 h-6" />
                        <span className="absolute top-2 right-2 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span className="sidebar-tooltip">Notifications</span>
                    </NavLink>
                )}

                <NavLink 
                    to="/settings"
                    onClick={() => handleItemClick('settings')}
                    className={`group relative p-3 rounded-lg transition-colors ${
                      activeItem === 'settings' 
                        ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-500' 
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                >
                    <Cog6ToothIcon className="w-6 h-6" />
                    <span className="sidebar-tooltip">Paramètres</span>
                </NavLink>
            </nav>

            {/* Account Section */}
            <div className="flex flex-col items-center space-y-4 pb-4">
                <button 
                    onClick={handleLogout}
                    className="group relative p-3 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <ArrowLeftOnRectangleIcon className="w-6 h-6" />
                    <span className="sidebar-tooltip">Déconnexion</span>
                </button>
                
                <div className="group relative w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                  <img src={profilePicture} alt="Profile" className="transition-transform hover:scale-110" />
                  <span className="sidebar-tooltip">Profil</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
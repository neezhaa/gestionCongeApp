import { createBrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Settings from "../pages/Settings.jsx";
import Layout from "../layouts/Layout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Profile from "../components/Settings/Profile.jsx";
import AccountSett from "../components/Settings/AccountSett.jsx";
import NotificationSett from "../components/Settings/NotificationSett.jsx";
import AppearenceSett from "../components/Settings/AppearenceSett.jsx";
import DisplaySett from "../components/Settings/DisplaySett.jsx";
import PublicRoute from "./PublicRoute.jsx";
import EmployeesTable from "../pages/EmployeesTable.jsx";
import AllLeaveRequests from "../pages/AllLeaveRequests.jsx";
import AllLeaveDemandes from "../pages/AllLeaveDemandes.jsx";
import EmployeeDashboard from "../pages/EmployeeDashboard.jsx";


export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
                ),
            },
            {
                path: '/employee-dashboard',
                element: (
                  <PrivateRoute>
                    <EmployeeDashboard />
                  </PrivateRoute>
                ),
            },
            {
                path: '/employees',
                element: (
                    <PrivateRoute>
                        <EmployeesTable/>
                    </PrivateRoute>
                ),
            },
            {
                path: '/all-requests',
                element: (
                    <PrivateRoute>
                        <AllLeaveRequests/>
                    </PrivateRoute>
                ),
            },
            {
                path: '/all-demandes',
                element: (
                    <PrivateRoute>
                        <AllLeaveDemandes/>
                    </PrivateRoute>
                ),
            },
            {
                element: (
                    <PrivateRoute>
                        <Settings/>
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: '/settings',
                        element: <Profile/>
                    },
                    {
                        path: '/settings/account',
                        element: <AccountSett/>
                    },
                    {
                        path: '/settings/appearence',
                        element: <AppearenceSett/>
                    },
                    {
                        path: '/settings/notifications',
                        element: <NotificationSett/>
                    },
                    {
                        path: '/settings/display',
                        element: <DisplaySett/>
                    },
                    
                ]
            },
            // {
            //     path: '/profile',
            //     element: <Profile/>
            // }
        ]
    },
    {
        path: '/login',
        element: <PublicRoute>
                    <Login />
                </PublicRoute>
    },
    {
        path: '/',
        element: <PublicRoute>
                    <Home/>
                </PublicRoute>

    },
    {
        path: '*',
        element: <NotFound/>
    },
])
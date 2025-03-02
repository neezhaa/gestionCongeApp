import { createBrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
// import Profile from "../pages/Profile.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Settings from "../pages/Settings.jsx";
import Layout from "../layouts/Layout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Profile from "../pages/Profile.jsx";
import AccountSett from "../components/AccountSett.jsx";
import NotificationSett from "../components/NotificationSett.jsx";
import AppearenceSett from "../components/AppearenceSett.jsx";
import DisplaySett from "../components/DisplaySett.jsx";
import PublicRoute from "./PublicRoute.jsx";
import EmployeesTable from "../pages/EmployeesTable.jsx";
import AllLeaveRequests from "../pages/AllLeaveRequests.jsx";

export const LOGIN_ROUTE = '/login'
export const EMPLOYEE_DASHBOARD_ROUTE = '/dashboard'
const ADMIN_BASE_ROUTE = '/admin'
export const ADMIN_DASHBOARD_ROUTE = ADMIN_BASE_ROUTE + '/dashboard'
export const redirectToDashboard = (roleType) => {
    switch (roleType){
        case 'employee':
            return (EMPLOYEE_DASHBOARD_ROUTE)
        case 'admin' :
            return (ADMIN_DASHBOARD_ROUTE)
    }
}
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
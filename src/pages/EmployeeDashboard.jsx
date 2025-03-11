// src/pages/EmployeeDashboard.jsx
import { useAuth } from "../context/AuthContext";
import EmployeeLeaveBalance from "../components/EmployeeDashboard/EmployeeLeaveBalance";
import EmployeeLeaveRequestsForm from "../components/EmployeeDashboard/EmployeeLeaveRequestsForm";
import EmployeeLeaveRequestsList from "../components/EmployeeDashboard/EmployeeLeaveRequestsList";
import EmployeeNotifications from "../components/EmployeeDashboard/EmployeeNotifications";
import { Navigate } from "react-router-dom";

function EmployeeDashboard() {
  const { auth } = useAuth();

  if (!auth || auth.user.is_admin) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="pl-[4rem] bg-[#f0f5f9] min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Espace Employé</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Solde de congé */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <EmployeeLeaveBalance />
        </div>

        {/* Formulaire de demande de congé */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-1">
          <EmployeeLeaveRequestsForm />
        </div>

        {/* Liste des demandes de congé */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
          <EmployeeLeaveRequestsList />
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-3">
          <EmployeeNotifications />
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
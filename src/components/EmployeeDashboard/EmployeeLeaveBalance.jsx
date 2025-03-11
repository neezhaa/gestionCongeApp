// src/components/EmployeeDashboard/EmployeeLeaveBalance.jsx
import { useAuth } from "../../context/AuthContext";

function EmployeeLeaveBalance() {
  const { auth } = useAuth();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Solde de congé</h2>
      <p className="text-2xl font-semibold">
        {auth?.user?.solde_conge || 0} jours restants
      </p>
    </div>
  );
}

export default EmployeeLeaveBalance;
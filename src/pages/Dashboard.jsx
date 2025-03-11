// src/pages/Dashboard.jsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { auth } = useAuth();

  if (!auth.user.is_admin) {
    return <Navigate to="/employee-dashboard" />;
  }

  return (
    <div className="h-screen pl-[4rem] bg-[#f0f5f9]">
      {/* Contenu du tableau de bord admin */}
    </div>
  );
}

export default Dashboard;
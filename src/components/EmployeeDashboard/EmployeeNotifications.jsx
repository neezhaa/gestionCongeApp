// src/components/EmployeeDashboard/EmployeeNotifications.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function EmployeeNotifications() {
  const { auth } = useAuth(); // Récupérer les informations de l'employé connecté
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/notifications",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        // Filtrer les notifications pour l'employé connecté
        const filteredNotifications = response.data.filter(
          (notification) => notification.employe_id === auth.user.id
        );

        setNotifications(filteredNotifications);
      } catch (error) {
        console.error("Erreur lors de la récupération des notifications", error);
      }
    };
    fetchNotifications();
  }, [auth.user.id]); // Rafraîchir les notifications si l'ID de l'employé change

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-gray-50 p-4 rounded-lg">
            <p>{notification.message}</p>
            <p className="text-sm text-gray-500">
              {new Date(notification.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeNotifications;
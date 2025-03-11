// src/components/EmployeeDashboard/EmployeeLeaveRequestsList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeLeaveRequestsList() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/conges", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setRequests(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des demandes", error);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Mes demandes de congé</h2>
      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="bg-gray-50 p-4 rounded-lg">
            <p>
              <strong>Du:</strong> {request.date_debut} <strong>Au:</strong>{" "}
              {request.date_fin}
            </p>
            <p>
              <strong>Motif:</strong> {request.motif_conge}
            </p>
            <p>
              <strong>Statut:</strong> {request.statut}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeLeaveRequestsList;
import { useState, useEffect } from "react";
import axios from "axios";

function EmployeeLeaveRequestsList() {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const authUser = JSON.parse(localStorage.getItem('authUser')); // Assurez-vous que l'utilisateur est stocké

  // Fonction pour récupérer les demandes de congé
  const fetchDemandes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/conges", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
  
      if (response.status === 200) {
        console.log(response.data.data)
        const filteredDemandes = response.data.data.filter(
          (demande) => demande.employe_id === authUser.id
        );
        console.log(filteredDemandes)

        setDemandes(filteredDemandes);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des demandes :", error);
    } finally {
      setLoading(false);
    }
  };

  // Charger les demandes au montage du composant
  useEffect(() => {
    fetchDemandes();
  }, []);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Mes demandes de congé</h2>

      {/* Liste des demandes */}
      {demandes.length > 0 ? (
        <ul className="space-y-4">
          {demandes.map((demande) => (
            <li key={demande.id} className="p-4 border rounded-lg">
              <p><strong>Date de début :</strong> {demande.date_debut}</p>
              <p><strong>Date de fin :</strong> {demande.date_fin}</p>
              <p><strong>Motif :</strong> {demande.motif_conge}</p>
              <p><strong>Statut :</strong> {demande.statut}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune demande de congé trouvée.</p>
      )}
    </div>
  );
}

export default EmployeeLeaveRequestsList;
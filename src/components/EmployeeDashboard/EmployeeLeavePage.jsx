import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeLeaveRequestsForm from "./EmployeeLeaveRequestsForm";
import EmployeeLeaveRequestsList from "./EmployeeLeaveRequestsList";

function EmployeeLeavePage() {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer les demandes de congé
  const fetchDemandes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/conges", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      if (response.status === 200) {
        console.log("Données reçues :", response.data.data); // Vérifier les données
        setDemandes(response.data.data || []); // Utiliser un tableau vide si response.data.data est undefined
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des demandes :", error);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour ajouter une nouvelle demande à la liste
  const handleNewDemande = (newDemande) => {
    console.log("Nouvelle demande :", newDemande); // Vérifier la nouvelle demande
    setDemandes((prevDemandes) => [newDemande, ...prevDemandes]);
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
      {/* Formulaire de demande de congé */}
      <EmployeeLeaveRequestsForm onDemandeSubmit={handleNewDemande} />

      {/* Liste des demandes de congé */}
      <EmployeeLeaveRequestsList demandes={demandes} />
    </div>
  );
}

export default EmployeeLeavePage;
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";

function EmployeeLeaveRequestsForm({ onDemandeSubmit }) {
  const { auth } = useAuth(); // Récupérer les informations de l'employé connecté
  const [formData, setFormData] = useState({
    date_debut: "",
    date_fin: "",
    motif_conge: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Vérifier que les dates sont valides
      if (new Date(formData.date_debut) > new Date(formData.date_fin)) {
        toast.error("La date de fin doit être postérieure à la date de début.");
        return;
      }

      // Ajouter l'ID de l'employé à la demande
      const requestData = {
        ...formData,
        employe_id: auth.user.id, // Assurez-vous que `auth.user.id` contient l'ID de l'employé
      };

      const response = await axios.post(
        "http://localhost:8000/api/conges",
        requestData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Demande de congé soumise avec succès !");
        setFormData({ date_debut: "", date_fin: "", motif_conge: "" }); // Réinitialiser le formulaire

        // Appeler la fonction onDemandeSubmit pour mettre à jour la liste des demandes
        if (onDemandeSubmit) {
          onDemandeSubmit(response.data.data);
        }
      } else {
        toast.error("Erreur lors de la soumission de la demande.");
      }
    } catch (error) {
      if (error.response) {
        // Afficher le message d'erreur du backend
        toast.error(`Erreur: ${error.response.data.message || "Erreur inconnue"}`);
      } else {
        toast.error("Erreur lors de la soumission de la demande.");
      }
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Faire une demande de congé</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Date de début</label>
          <input
            type="date"
            value={formData.date_debut}
            onChange={(e) =>
              setFormData({ ...formData, date_debut: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date de fin</label>
          <input
            type="date"
            value={formData.date_fin}
            onChange={(e) =>
              setFormData({ ...formData, date_fin: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Motif</label>
          <select
            value={formData.motif_conge}
            onChange={(e) =>
              setFormData({ ...formData, motif_conge: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="">Sélectionnez un motif</option>
            <option value="vacances">Vacances</option>
            <option value="maladie">Maladie</option>
            <option value="congé maternité">Congé maternité</option>
            <option value="congé paternité">Congé paternité</option>
            <option value="congé évènement familial">Congé évènement familial</option>
            <option value="congé naissance enfant">Congé naissance enfant</option>
            <option value="congé formation">Congé formation</option>
            <option value="congé personnel">Congé personnel</option>
            <option value="congé voyage affaires">Congé voyage affaires</option>
            <option value="congé fin année">Congé fin année</option>
            <option value="congé déménagement">Congé déménagement</option>
            <option value="congé marriage">Congé marriage</option>
            <option value="congé adoption">Congé adoption</option>
            <option value="congé études">Congé études</option>
            <option value="congé sans solde">Congé sans solde</option>
            <option value="congé deuil">Congé deuil</option>
            <option value="congé solidarité familiale">Congé solidarité familiale</option>
            <option value="congé religieux">Congé religieux</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
}

export default EmployeeLeaveRequestsForm;